import { TypeSystem } from "@sinclair/typebox/system";

const ALPHADASH_PATTERN = /^[a-zA-Z0-9_-]+$/;

TypeSystem.Format("alphadash", (input) => {
  return ALPHADASH_PATTERN.test(input);
});
