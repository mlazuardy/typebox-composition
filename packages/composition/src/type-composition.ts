import { TSchema } from "@sinclair/typebox";
import {
  ValidateOptions,
  ErrorMessage,
  TypeCompositionOptions,
  SchemaError,
} from "./interfaces";
import { Value, ValueError } from "@sinclair/typebox/value";
import { formatMessage, getErrorInfo } from "./errors";
import { isObjectEmpty } from "./utils";
import { LocalMessage } from "./interfaces/message.interface";
import en from "./locales/en";

export class TypeComposition {
  private lang = "en";
  private messages: Record<string, Record<string, ErrorMessage>>;

  constructor(options: TypeCompositionOptions) {
    this.lang = options.lang;
    this.messages = options.messages || { en };
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
    };
  }

  private getCurrentMessages(lang?: string) {
    return this.messages[this.getLang(lang)];
  }

  private getMessageValue(key: string, lang?: string) {
    return this.getCurrentMessages(lang)?.[key];
  }

  private getCustomMessageKey(
    messageKey: string,
    messages: Record<string, LocalMessage>,
    lang?: string,
  ) {
    const fixedLang = this.getLang(lang);
    const messageVal = messages?.[fixedLang]?.[messageKey];

    return messageVal || this.getMessageValue(messageKey, lang);
  }

  getErrorMessage(error: ValueError, lang?: string) {
    const kind = error.schema[Symbol.for("TypeBox.Kind") as any];
    const messages = this.messages[this.getLang(lang)];
    const field = error.path.replace("/", "").split("/").join(".");
    const fieldOrTitle = error.schema.title || field;
    const { messageKey, expected, ...rest } = getErrorInfo(error);
    let messageVal = messages[messageKey];

    if (!isObjectEmpty(error.schema.messages)) {
      messageVal = this.getCustomMessageKey(messageKey, error.schema.messages);
    }

    const payload: SchemaError = {
      field,
      kind,
      path: error.path,
      message: "",
      type: error.type,
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
}
