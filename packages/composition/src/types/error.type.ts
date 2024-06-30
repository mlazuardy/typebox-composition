import type { ValueErrorType } from "@sinclair/typebox/errors";

export interface ErrorInfo {
  messageKey: string;
  expected?: any;
}

export type ErrorMessage = string | ((args: Record<string, any>) => string);

export interface SchemaError {
  field: string;
  message: string;
  kind: string;
  path: string;
  type?: ValueErrorType;
}
