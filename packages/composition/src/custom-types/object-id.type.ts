import { TypeSystem } from "@sinclair/typebox/system";
import { isTypeOptional } from "../utils";
import { type SchemaOptions } from "@sinclair/typebox";

/**
 * Validate against bson/mongodb ObjectId's
 */
export const TypeObjectId = TypeSystem.Type<string, SchemaOptions>(
  "ObjectId",
  (options, value) => {
    if (isTypeOptional(options) && !value) {
      return true;
    }

    const regex = /^[0-9a-fA-F]{24}$/;
    return regex.test(value as string);
  },
);
