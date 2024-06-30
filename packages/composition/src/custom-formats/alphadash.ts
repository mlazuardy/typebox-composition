import { TypeSystem } from "@sinclair/typebox/system";

const PATTERN = /^[a-zA-Z0-9_-]+$/;

export const Alphadash = TypeSystem.Format("Alphadash", (input) => {
  return PATTERN.test(input);
});
