import { SchemaOptions, TUnsafe, Type } from "@sinclair/typebox";
import type { ErrorInfo } from "./interfaces";
import { TypeEmail } from "./custom-types";

const t = Object.assign({}, Type);
t.Email = (options?: SchemaOptions) => TypeEmail(options);

declare module "@sinclair/typebox" {
  interface JavaScriptTypeBuilder {
    Email: (options?: SchemaOptions) => TUnsafe<string>;
  }
  interface SchemaOptions {
    field?: string | Record<string, string>;
    errorInfo?: ErrorInfo;
  }
}

export { t };
