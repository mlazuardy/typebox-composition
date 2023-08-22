import { SchemaOptions } from "@sinclair/typebox";
import type { ErrorInfo } from "./error.interface";

export interface CustomTypeOptions extends SchemaOptions {
  errorInfo?: ErrorInfo;
}
