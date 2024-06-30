import { TSchema, Type } from "@sinclair/typebox";

export const TypeNullable = <T extends TSchema>(schema: T) =>
  Type.Union([schema, Type.Null()]);
