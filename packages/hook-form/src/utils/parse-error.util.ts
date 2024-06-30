import { ValueError, ValueErrorType } from "@sinclair/typebox/errors";
import { FieldError, appendErrors } from "react-hook-form";

export const parseErrorSchema = (
  _errors: ValueError[],
  validateAllFieldCriteria: boolean,
) => {
  const errors: Record<string, FieldError> = {};
  for (; _errors.length; ) {
    let error = _errors[0];
    if (error.type === ValueErrorType.Intersect && _errors[1]) {
      error = _errors[1];
    }
    const { type, message, path } = error;
    const _path = path.substring(1).replace(/\//g, ".");

    if (!errors[_path]) {
      errors[_path] = { message, type: "" + type };
    }

    if (validateAllFieldCriteria) {
      const types = errors[_path].types;
      const messages = types && types["" + type];

      errors[_path] = appendErrors(
        _path,
        validateAllFieldCriteria,
        errors,
        "" + type,
        messages
          ? ([] as string[]).concat(messages as string[], error.message)
          : error.message,
      ) as FieldError;
    }

    _errors.shift();
  }

  return errors;
};
