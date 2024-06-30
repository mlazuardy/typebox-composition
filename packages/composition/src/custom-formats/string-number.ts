import { TypeSystem } from "@sinclair/typebox/system";

export const StringNumberFormat = TypeSystem.Format("NumberFormat", (input) => {
  return !isNaN(Number(input));
});
