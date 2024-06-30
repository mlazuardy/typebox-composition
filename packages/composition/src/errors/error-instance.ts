import { Kind, TString } from "@sinclair/typebox";
import {
  SetErrorFunction,
  DefaultErrorFunction,
  ErrorFunctionParameter,
  ValueErrorType,
} from "@sinclair/typebox/errors";
import type { ErrorRecord, ErrorValue } from "./error.type";
import { getTitleFromPath } from "./error-title";

interface LoadOptions {
  messages?: Record<string, ErrorRecord>;
  defaultLocale?: string;
}

export class ErrorInstance {
  static isLoad = false;
  static messages: Record<string, ErrorRecord> = {};
  static locale = "en";

  static setLocale(locale: string) {
    this.locale = locale;
  }

  static getLabel(error: ErrorFunctionParameter) {
    if (error.schema.label) {
      if (typeof error.schema.label === "string") {
        return error.schema.label;
      }

      const label = error.schema.label[this.locale];
      return label ?? getTitleFromPath(error.path);
    }

    return getTitleFromPath(error.path);
  }

  static getMessage(errorValue: ErrorValue, error: ErrorFunctionParameter) {
    if (typeof errorValue === "function") {
      const label = this.getLabel(error);
      return errorValue({ ...error, label });
    }

    return errorValue;
  }

  static load(options?: LoadOptions) {
    this.messages = options?.messages ?? {};
    this.locale = options?.defaultLocale ?? "en";

    if (!this.isLoad) {
      SetErrorFunction((error) => {
        const kind = error.schema[Kind];
        const errorValue = this.messages[this.locale][error.errorType];

        if (errorValue) {
          return this.getMessage(errorValue, error);
        }

        const errorValueKind = this.messages[this.locale][kind];
        if (errorValueKind) {
          return this.getMessage(errorValueKind, error);
        }

        if (error.errorType === ValueErrorType.StringFormat) {
          const stringFormatKind = "String" + (error.schema as TString).format;
          const errorValue = this.messages[this.locale][stringFormatKind];
          if (errorValue) {
            return this.getMessage(errorValue, error);
          }
        }

        return DefaultErrorFunction(error);
      });

      this.isLoad = true;
    }
  }
}
