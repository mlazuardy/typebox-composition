import { ErrorMessage } from "../interfaces/error-message.interface";
import { ValueError, ValueErrorType } from "@sinclair/typebox/errors";
import { ERROR_TYPE } from "../constants/error-type.constant";
import { ErrorInfo } from "../interfaces";

export function getErrorInfo(error: ValueError): ErrorInfo {
  const kind = error.schema[Symbol.for("TypeBox.Kind") as any];
  if (kind === "String") {
    return getStringError(error);
  }

  if (kind === "Email") {
    return {
      messageKey: !error.value ? ERROR_TYPE.emailEmpty : ERROR_TYPE.email,
    };
  }

  return {
    messageKey: String(error.type),
    ...error,
  };
}

function getStringError({ schema, type }: ValueError) {
  let expected: any;

  if (
    type === ValueErrorType.String ||
    type === ValueErrorType.ObjectRequiredProperties
  ) {
    return {
      messageKey: ERROR_TYPE.stringEmpty,
      expected,
    };
  }

  if (type === ValueErrorType.StringMinLength) {
    expected = schema.minLength;
    if (schema.minLength === 1 && schema.required) {
      return {
        messageKey: ERROR_TYPE.stringEmpty,
        expected,
      };
    }

    return {
      messageKey: ERROR_TYPE.stringMin,
      expected,
    };
  }

  if (type === ValueErrorType.StringMaxLength) {
    expected = schema.maxLength;
    return {
      messageKey: ERROR_TYPE.stringMax,
      expected,
    };
  }

  return {
    messageKey: ERROR_TYPE.stringEmpty,
    expected,
  };
}

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
