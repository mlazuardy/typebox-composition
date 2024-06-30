import type { SchemaOptions } from "@sinclair/typebox";
import type { ErrorFunctionParameter } from "@sinclair/typebox/errors";

export interface ErrorParams<T = SchemaOptions>
  extends Omit<ErrorFunctionParameter, "schema"> {
  label: string;
  schema: T;
}

export type ErrorProperty = string | number;
export type ErrorValue<T = SchemaOptions> =
  | string
  | ((error: ErrorParams<T>) => string);
export type ErrorRecord = Record<ErrorProperty, ErrorValue>;
