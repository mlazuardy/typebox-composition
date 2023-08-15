import { TypeSystem } from "@sinclair/typebox/system";

const PATTERN = /^[a-zA-Z0-9_-]+$/;

export const AlphaDash = TypeSystem.Format("alphadash", (input) => {
  return PATTERN.test(input);
});
