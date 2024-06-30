import {
  SchemaOptions,
  TNull,
  TSchema,
  TUnion,
  TUnsafe,
  Type,
} from "@sinclair/typebox";
import { TypeSystem } from "@sinclair/typebox/system";
import {
  TypeEmail,
  TypeNullable,
  TypeNumberable,
  TypePhoneNumber,
} from "./custom-types";

const t = Object.assign({}, Type);
t.Email = (options?: SchemaOptions) => TypeEmail(options);
t.Numberable = TypeNumberable;
t.Phone = TypePhoneNumber;
t.Nullable = <T extends TSchema>(schema: T) => TypeNullable(schema);

const typeSystem = Object.assign({}, TypeSystem);
declare module "@sinclair/typebox" {
  interface JavaScriptTypeBuilder {
    Email: (options?: SchemaOptions) => TUnsafe<string>;
    Numberable: (options?: SchemaOptions) => TUnsafe<number>;
    Phone: (options?: SchemaOptions) => TUnsafe<string>;
    Nullable: <T extends TSchema>(schema: T) => TUnion<[T, TNull]>;
  }
  interface SchemaOptions {
    label?: string | Record<string, string>;
  }
}
export { t, typeSystem };
