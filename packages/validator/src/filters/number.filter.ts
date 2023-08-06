import { ValueError, ValueErrorType } from "@sinclair/typebox/value";
import { isEmptyOrNull } from "./utils";
import { formatMessage } from "./format.filter";
import { getMessages } from "../messages";
const messages = getMessages();

export function formatNumberMessage(
  field: String,
  { type: defaultType, schema, message, value }: ValueError,
) {
  const type: ValueErrorType | number = defaultType;
  let expected: any = schema.minimum;

  if (type === ValueErrorType.Number) {
    const template = isEmptyOrNull(value) ? messages.required : messages.number;
    return formatMessage(template, { field });
  }

  if (type === ValueErrorType.NumberMinimum) {
    return formatMessage(messages.numberMin, { field, expected });
  }

  if (type === ValueErrorType.NumberMaximum) {
    expected = schema.maximum;
    return formatMessage(messages.numberMax, { field, expected });
  }

  return message;
}
