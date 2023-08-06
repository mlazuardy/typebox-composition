import { ValueErrorType, type ValueError } from "@sinclair/typebox/value";
import { formatMessage } from "./format.filter";
import { isSchemaOptional } from "./utils";
import { getMessages } from "../messages";
const messages = getMessages();

export function formatStringMessage(
  field: string,
  { type, schema, message, value }: ValueError,
) {
  let expected: any = schema.minLength;

  if (!value && isSchemaOptional(schema)) {
    return null;
  }

  if (
    type === ValueErrorType.String ||
    type === ValueErrorType.ObjectRequiredProperties
  ) {
    return formatMessage(messages.stringEmpty, { field });
  }

  if (type === ValueErrorType.StringMinLength) {
    if (schema.minLength === 1 && schema.required) {
      return formatMessage(messages.required, { field });
    }

    return formatMessage(messages.stringMin, { field, expected });
  }

  if (type === ValueErrorType.StringMaxLength) {
    expected = schema.maxLength;
    return formatMessage(messages.stringMax, { field, expected });
  }

  if (schema.format === "alphadash") {
    return formatMessage(messages.stringAlphadash, { field });
  }

  if (schema.format === "phone") {
    return formatMessage(messages.phoneInvalid, { field });
  }

  return message;
}
