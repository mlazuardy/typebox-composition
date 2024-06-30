import { Value } from "@sinclair/typebox/value";
import { type FieldError } from "react-hook-form";
import {
  parseErrorSchema,
  toNestErrors,
  validateFieldsNatively,
} from "./utils";
import { Resolver } from "./types";
import { sanitizeIncomingValue } from "@typeb/composition";

type FieldErrors = Record<string, FieldError>;

export const typeboxResolver: Resolver =
  (schema) => async (values, _, resolverOptions) => {
    const data = sanitizeIncomingValue(values);
    const errors = Array.from(Value.Errors(schema, data));

    resolverOptions.shouldUseNativeValidation &&
      validateFieldsNatively({}, resolverOptions);

    if (!errors.length) {
      return {
        errors: {} as FieldErrors,
        values,
      };
    }

    return {
      values: {},
      errors: toNestErrors(
        parseErrorSchema(
          errors,
          !resolverOptions.shouldUseNativeValidation &&
            resolverOptions.criteriaMode === "all",
        ),
        resolverOptions,
      ),
    };
  };
