export interface ErrorInfo extends Record<string, any> {
  messageKey: string;
  expected?: any;
}
