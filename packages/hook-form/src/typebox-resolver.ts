import type { Static, Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { type FieldError } from "react-hook-form";
import type { TypeboxResolverOptions } from "./interfaces";
import {
  parseErrorSchema,
  toNestErrors,
  validateFieldsNatively,
} from "./utils";

type FieldErrors = Record<string, FieldError>;

export const typeboxResolver =
  <T extends ReturnType<typeof Type.Object>>(
    schema: T,
    options: TypeboxResolverOptions<T>,
  ) =>
  async (data: Static<typeof schema>, dontKnow: any, otherOptions: any) => {
    const validator = options.validator;
    const convert = options?.convert || false;

    if (options?.beforeValidate) {
      data = options.beforeValidate(data as any) as Static<typeof schema>;
    }

    const { errors } = validator.validate(schema, data, options);
    otherOptions.shouldUseNativeValidation &&
      validateFieldsNatively({}, otherOptions);

    if (!errors.length) {
      const values = convert
        ? (Value.Convert(schema, data) as any as Static<typeof schema>)
        : data;

      return {
        values: values as Static<typeof schema>,
        errors: {} as FieldErrors,
      };
    }

    const mappedErrors = toNestErrors(
      parseErrorSchema(
        errors,
        !otherOptions?.shouldUseNativeValidation &&
          otherOptions?.criteriaMode === "all",
      ),
      otherOptions,
    );

    return {
      errors: mappedErrors as unknown as FieldErrors,
      values: {} as Static<typeof schema>,
    };
  };
