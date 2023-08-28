import type { Static, TObject, TProperties } from "@sinclair/typebox";
import { TypeboxResolverOptions } from "./interfaces";
import { SchemaError } from "@typeb/composition";
import { Value } from "@sinclair/typebox/value";

function isObjectEmpty(data: Record<string, any>) {
  return Object.keys(data).length === 0;
}

export function typeboxResolver<T extends TProperties>(
  schema: TObject<T>,
  options: TypeboxResolverOptions<T>,
) {
  const validator = options.validator;
  return (data: Static<typeof schema>) => {
    const convert = options?.convert || false;

    if (options?.beforeValidate) {
      data = options.beforeValidate(data) as Static<typeof schema>;
    }

    const { errors } = validator.validate(schema, data, options);

    if (errors.length) {
      const mappedErrors: Record<string, SchemaError> = {};

      errors.forEach((error) => {
        if (error.message) {
          mappedErrors[error.field] = error as SchemaError;
        }
      });

      if (!isObjectEmpty(mappedErrors)) {
        return {
          errors: mappedErrors,
          values: {},
        };
      }
    }

    const values = convert
      ? (Value.Convert(schema, data) as any as Static<typeof schema>)
      : data;

    return {
      values,
      errors: {},
    };
  };
}
