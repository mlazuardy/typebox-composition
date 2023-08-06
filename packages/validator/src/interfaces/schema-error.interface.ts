export interface SchemaError {
  type?: string;
  field: string;
  message: string;
  expected?: any;
}
