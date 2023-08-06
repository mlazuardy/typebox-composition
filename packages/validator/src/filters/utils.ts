import type { TSchema } from "@sinclair/typebox";

export function isEmptyOrNull(value?: any) {
  return value === "" || value === undefined || value === null;
}

export function isObjectEmpty(data: Record<string, any>) {
  return JSON.stringify(data) === "{}";
}

export function isSchemaOptional(schema: TSchema) {
  const optionalSymbol = Object.getOwnPropertySymbols(schema).find((s) => {
    return s.description === "TypeBox.Modifier";
  });

  if (optionalSymbol) {
    return true;
  }

  return false;
}
