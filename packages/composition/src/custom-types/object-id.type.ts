import { TypeSystem } from "@sinclair/typebox/system";
import { CustomTypeOptions } from "../interfaces";
import { isTypeOptional } from "../utils";

/**
 * Validate against bson/mongodb ObjectId's
 */
export const TypeObjectId = TypeSystem.Type<string, CustomTypeOptions>(
  "ObjectId",
  (options, value) => {
    if (isTypeOptional(options) && !value) {
      return true;
    }

    const regex = /^[0-9a-fA-F]{24}$/;
    return regex.test(value as string);
  },
);
