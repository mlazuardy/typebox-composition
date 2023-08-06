import { ValueError, ValueErrorType } from "@sinclair/typebox/value";
import { formatMessage } from "./format.filter";
import { getMessages } from "../messages";
const messages = getMessages();

export function formatArrayMessage(
  field: string,
  { message, type, schema }: ValueError,
) {
  const expected: any = schema.minItems || schema.maxItems;
  if (type === ValueErrorType.ArrayMinItems) {
    return formatMessage(messages.arrayMin, { field, expected });
  }

  if (type === ValueErrorType.ArrayMaxItems) {
    return formatMessage(messages.arrayMax, { field, expected });
  }

  return message;
}
