import type { TArray, TObject, TSchema } from "@sinclair/typebox";

export function isTypeOptional(schema: any) {
  const optionalSymbol = Object.getOwnPropertySymbols(schema).find((s) => {
    return s.description === "TypeBox.Optional";
  });

  if (optionalSymbol) {
    return true;
  }

  return false;
}

export function sanitizeValue(data: any) {
  if (typeof data === "string" && (data === "" || data === undefined)) {
    return undefined;
  }

  return data;
}

export function removeAdditionalProps<T extends Record<string, unknown>>(
  schema: TObject | TSchema | TArray,
  data: T | T[],
): T {
  if (Array.isArray(data)) {
    return data.map((o) =>
      removeAdditionalProps(schema.items, o),
    ) as unknown as T;
  }

  if (typeof data !== "object" || data === null) {
    return sanitizeValue(data);
  }

  if (!schema.properties) {
    // No schema properties defined, return the original data
    return sanitizeValue(data);
  }

  const result: any = Array.isArray(data) ? [] : {};

  for (const key in data) {
    if (schema.properties.hasOwnProperty(key)) {
      // Recursively process nested objects
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /** @ts-ignore */
      result[key] = removeAdditionalProps(schema.properties[key], data[key]);
    }
  }

  return result;
}

/**
 * recursively remove or make field undefined.
 * if field in object or array contains empty string, change it to undefined
 */
export function sanitizeIncomingValue(data: any): any {
  if (Array.isArray(data)) {
    return data.map((value) => sanitizeIncomingValue(value));
  } else if (typeof data === "object" && data !== null) {
    return Object.entries(data).reduce(
      (r, [key, value]) => ({
        ...r,
        [key]: sanitizeIncomingValue(value),
      }),
      {},
    );
  } else {
    if (typeof data === "string") {
      // return data === "" || data === null ? undefined : data;
      return data === "" ? undefined : data;
    }

    // if needed we may sanitized other type too

    return data;
  }
}
