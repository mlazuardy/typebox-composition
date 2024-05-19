import { SchemaOptions, TUnsafe, Type } from "@sinclair/typebox";
import type { ErrorInfo } from "./types";
import { TypeEmail } from "./custom-types";
import { TypeSystem } from "@sinclair/typebox/system";

const t = Object.assign({}, Type);
t.Email = (options?: SchemaOptions) => TypeEmail(options);
const typeSystem = Object.assign({}, TypeSystem);

declare module "@sinclair/typebox" {
  interface JavaScriptTypeBuilder {
    Email: (options?: SchemaOptions) => TUnsafe<string>;
  }
  interface SchemaOptions {
    field?: string | Record<string, string>;
    errorInfo?: ErrorInfo;
  }
}

export { t, typeSystem };
