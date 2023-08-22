import { ValueError, ValueErrorType } from "@sinclair/typebox/errors";
import { ERROR_TYPE } from "../constants/error-type.constant";
import type { ErrorInfo, ErrorMessage } from "../interfaces";
import { isEmptyOrNull } from "../utils";

export function getErrorInfo(error: ValueError): ErrorInfo {
  const { schema, value } = error;
  const errorInfo = schema.errorInfo;
  const kind = schema[Symbol.for("TypeBox.Kind") as any];
  let formattedError: ErrorInfo = {
    messageKey: String(error.type),
  };

  switch (kind) {
    case "String":
      formattedError = getStringError(error);
      break;
    case "Number":
      formattedError = getNumberError(error);
      break;
    case "Email":
      formattedError = {
        messageKey: !error.value ? ERROR_TYPE.required : ERROR_TYPE.email,
      };
      break;
    // this is Enum
    case "Union":
    case "Literal":
      formattedError = {
        messageKey: !value ? ERROR_TYPE.required : ERROR_TYPE.enum,
      };
      break;
    case "Array":
      formattedError = getArrayError(error);
      break;
    case "Boolean":
      formattedError = getBooleanError(error);
      break;
    default:
      if (errorInfo) {
        formattedError = errorInfo;
      }

      break;
  }

  if (!formattedError) {
    formattedError = {
      messageKey: String(error.type),
    };
  }

  return {
    ...formattedError,
    ...error,
  };
}

function getNumberError({ schema, type: defaultType, value }: ValueError) {
  const type: ValueErrorType | number = defaultType;
  let expected: any = schema.minimum;

  if (type === ValueErrorType.Number) {
    return {
      messageKey: isEmptyOrNull(value)
        ? ERROR_TYPE.required
        : ERROR_TYPE.number,
      expected,
    };
  }

  if (type === ValueErrorType.NumberMinimum) {
    return {
      messageKey: ERROR_TYPE.numberMin,
      expected,
    };
  }

  if (type === ValueErrorType.NumberMaximum) {
    expected = schema.maximum;
    return {
      messageKey: ERROR_TYPE.numberMax,
      expected,
    };
  }

  return {
    messageKey: ERROR_TYPE.number,
    expected,
  };
}

function getStringError({ schema, type, value }: ValueError) {
  let expected: any;

  if (
    type === ValueErrorType.String ||
    type === ValueErrorType.ObjectRequiredProperty
  ) {
    return {
      messageKey: ERROR_TYPE.required,
      expected,
    };
  }

  if (type === ValueErrorType.StringMinLength) {
    expected = schema.minLength;
    if (schema.minLength === 1 && schema.required) {
      return {
        messageKey: ERROR_TYPE.required,
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

  if (value && schema.format === "alphadash") {
    return {
      messageKey: ERROR_TYPE.stringAlphadash,
    };
  }

  return {
    messageKey: ERROR_TYPE.required,
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

function getArrayError({ schema, type }: ValueError) {
  if (type === ValueErrorType.ArrayMinItems) {
    return {
      messageKey: ERROR_TYPE.arrayMin,
      expected: schema.minItems,
    };
  }

  if (type === ValueErrorType.ArrayMaxItems) {
    return {
      messageKey: ERROR_TYPE.arrayMax,
      expected: schema.maxItems,
    };
  }

  return {
    messageKey: ERROR_TYPE.array,
  };
}

function getBooleanError({ value }: ValueError) {
  return {
    messageKey: isEmptyOrNull(value) ? ERROR_TYPE.required : ERROR_TYPE.boolean,
  };
}
