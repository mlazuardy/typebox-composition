export interface ErrorInfo extends Record<string, any> {
  messageKey: string;
  expected?: any;
}

export type ErrorMessage = string | ((args: Record<string, any>) => string);

export interface SchemaError {
  type?: string;
  field: string;
  message: string;
  expected?: any;
}
