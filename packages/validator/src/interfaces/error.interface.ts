export interface ErrorInfo extends Record<string, any> {
  messageKey: string;
  expected?: any;
}

export type ErrorMessage = string | ((args: Record<string, any>) => string);

export interface SchemaError {
  field: string;
  message: string;
  kind: string;
  path: string;
}
