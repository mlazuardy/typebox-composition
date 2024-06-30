import type { TSchema } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";

export const validateForm =
  (schema: TSchema, message?: string) => (value: any) => {
    const valid = Value.Check(schema, value);

    if (!valid) {
      return message || valid;
    }
  };
