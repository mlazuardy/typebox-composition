import { type SchemaOptions } from "@sinclair/typebox";
import { TypeSystem } from "@sinclair/typebox/system";
import { isTypeOptional } from "../utils";
const NAME = "Numerable";

export const TypeNumberable = TypeSystem.Type<number, SchemaOptions>(
  NAME,
  (schema, value) => {
    if (!value && isTypeOptional(schema)) {
      return true;
    }

    const numValue = Number(value);
    if (isNaN(numValue)) {
      return false;
    }

    return true;
  },
);
