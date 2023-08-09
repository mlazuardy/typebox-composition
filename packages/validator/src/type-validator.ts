import { TSchema } from "@sinclair/typebox";
import {
  TypeValidatorOptions,
  ValidateOptions,
  ErrorMessage,
} from "./interfaces";
import { Value, ValueError } from "@sinclair/typebox/value";
import {
  formatArrayMessage,
  formatEmailMessage,
  formatNumberMessage,
  formatStringMessage,
} from "./filters";
import { messages as defaultMessages } from "./messages";
import { formatMessage, getErrorInfo } from "./errors";

export class TypeValidator {
  private lang = "en";
  private messages: Record<string, Record<string, ErrorMessage>>;

  constructor(options: TypeValidatorOptions) {
    this.lang = options.lang;
    this.messages = options.messages || defaultMessages;
  }

  private getLang(lang?: string) {
    return lang || this.lang;
  }

  validate(
    schema: TSchema,
    data: Record<string, any>,
    options?: ValidateOptions,
  ) {
    const errors = [...Value.Errors(schema, data)];

    const mappedErrors = errors.map((err) =>
      this.getErrorMessage(err, options?.lang),
    );

    return {
      data,
      errors: mappedErrors,
      // TODO: REMOVE THIS
      rawErrors: errors,
    };
  }

  getErrorMessage(error: ValueError, lang?: string) {
    const kind = error.schema[Symbol.for("TypeBox.Kind") as any];
    const messages = this.messages[this.getLang(lang)];
    const field = error.path.replace("/", "").split("/").join(".");
    const fieldOrTitle = error.schema.title || field;
    const { messageKey, expected, ...rest } = getErrorInfo(error);
    const messageVal = messages[messageKey];

    const payload: Record<string, any> = {
      field,
      kind,
      type: error.schema.type || error.type,
      path: error.path,
    };

    if (!messageVal) {
      payload.message = error.message;
      // TODO: configured unsupported rule / type error
    } else {
      payload.message = formatMessage(messageVal, {
        field: fieldOrTitle,
        expected,
        ...rest,
      });
    }

    return payload;
  }

  /** TODO: remove this */
  formatErrorMessage(error: ValueError) {
    const path = error.path.replace("/", "").split("/").join(".");
    const field = error.schema.title || path;
    const kind = error.schema[Symbol.for("TypeBox.Kind") as any];

    if (error.schema.type === "string") {
      return formatStringMessage(field, error);
    }

    if (error.schema.type === "number") {
      return formatNumberMessage(field, error);
    }

    if (error.schema.type === "array") {
      return formatArrayMessage(field, error);
    }

    if (kind === "Email") {
      return formatEmailMessage(field, error);
    }

    return error.message;
  }
}
