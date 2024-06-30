import { ValueErrorType } from "@sinclair/typebox/errors";
import type { ErrorParams, ErrorRecord } from "../errors/error.type";
import type { NumberOptions } from "@sinclair/typebox";
type NumError = ErrorParams<NumberOptions>;

export const en: ErrorRecord = {
  [ValueErrorType.ObjectRequiredProperty]: ({ label }) => {
    return `the ${label} is required.`;
  },
  [ValueErrorType.String]: ({ label }) => {
    return `the ${label} must be a string.`;
  },
  [ValueErrorType.StringMinLength]: ({ schema, label }) => {
    return `the ${label} must be at least ${schema.minLength} characters.`;
  },
  [ValueErrorType.StringMaxLength]: ({ schema, label }) => {
    return `the ${label} must be less or equal to ${schema.minLength} characters.`;
  },
  [ValueErrorType.Number]: ({ label }) => {
    return `the ${label} must be a number`;
  },
  [ValueErrorType.NumberMinimum]: ({ label, schema }: NumError) => {
    return `the ${label} must be at least ${schema.minimum}.`;
  },
  [ValueErrorType.NumberMaximum]: ({ label, schema }: NumError) => {
    return `the ${label} must be less or equal to ${schema.maximum}.`;
  },
  StringAlphadash: ({ label }) =>
    `the ${label} must be a string of alphabets, numeric, and/or dash.`,
  Email: ({ label }) => {
    return `the ${label} must be a valid email.`;
  },
  Numerable: ({ label }) => {
    return `the ${label} must be numerable value.`;
  },
  StringNumberFormat: ({ label }) => {
    return `${label} must be a valid number.`;
  },
  Phone: ({ label }) => {
    return `invalid ${label} .`;
  },
};
