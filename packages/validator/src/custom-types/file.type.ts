import { TypeSystem } from "@sinclair/typebox/system";

export interface FileOptions {
  optional?: boolean;
  // max size in bytes
  max?: number;
  // if true, will validate based on fastify
  api?: boolean;
}

/** This custom type is still experimental */
export const TypeFile = TypeSystem.Type<any, FileOptions>(
  "File",
  (options, value) => {
    const isUndefined =
      typeof value === "object" ? JSON.stringify(value) === "{}" : !value;

    if (isUndefined && options?.optional) {
      return true;
    }

    const isClient = typeof window !== "undefined";
    const input = value as any;

    if (isClient) {
      return input instanceof File;
    }

    if (options?.max) {
      //
    }

    return true;
  },
);
