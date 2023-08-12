import type { ErrorMessage } from "./error.interface";

export interface TypeCompositionOptions {
  /** default and/or fallback language, can still be configured on the fly when using validate method */
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

  /**
   * if true, we will try to format the title inside message property based on your field
   * the format covered camelCase and snakeCase field
   * e.g firstName or first_name will turned into `first name`
   * if you defined `title` options inside Typebox Type or your cutom type e.g Type.String({ title: "my first name" })
   * the title options will be prioritized.
   */
  formatTitle?: boolean;
}

export interface ValidateOptions {
  lang?: string;
}
