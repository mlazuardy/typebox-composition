import type { ErrorMessage } from "../interfaces";

export function formatMessage(
  message: ErrorMessage,
  variables: Record<string, any> = {},
) {
  let formattedMessage =
    typeof message === "function" ? message(variables) : message;

  if (typeof message === "string") {
    for (const key in variables) {
      if (Object.prototype.hasOwnProperty.call(variables, key)) {
        const placeholder = `{${key}}`;
        const value = variables[key];
        formattedMessage = formattedMessage.replace(placeholder, value);
      }
    }
  }

  return formattedMessage;
}
