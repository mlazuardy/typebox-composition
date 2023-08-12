import { TypeSystem } from "@sinclair/typebox/system";

/**
 * Validate against bson/mongodb ObjectId's
 */
export const TypeObjectId = TypeSystem.Type<string>("ObjectId", (_, value) => {
  const regex = /^[0-9a-fA-F]{24}$/;
  return regex.test(value as string);
});
