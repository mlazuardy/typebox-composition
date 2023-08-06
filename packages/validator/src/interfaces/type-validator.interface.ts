import { ErrorMessage } from "./error-message.interface";

export interface TypeValidatorOptions {
  /** default language, can still be configured on the fly when using validate */
  lang: string;
  /**
   * your validation messages
   * if empty it will used our default messages for `en` lang
   * e.g
   * const messages = {
   *  en: {
   *    stringEmpty: "the {field} field is required.",
   *    stringMin: ({field, expected}) => `the ${field} field must be greater or equal to ${expected}`
   *  },
   * }
   */
  messages?: Record<string, Record<string, ErrorMessage>>;
}

export interface ValidateOptions {
  lang?: string;
}
