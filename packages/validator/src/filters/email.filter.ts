import { ValueError, ValueErrorType } from "@sinclair/typebox/value";
import { getMessages } from "../messages";
import { formatMessage } from "./format.filter";

const messages = getMessages();

export function formatEmailMessage(field: string, { type }: ValueError) {
  const template =
    type === ValueErrorType.Kind ? messages.email : messages.emailEmpty;

  return formatMessage(template, { field });
}
