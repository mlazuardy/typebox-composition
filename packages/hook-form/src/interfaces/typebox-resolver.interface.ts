import type { Static, TObject, TProperties } from "@sinclair/typebox";
import type { TypeValidator } from "@typeb/composition";

export interface TypeboxResolverOptions<T extends TProperties> {
  validator?: TypeValidator;
  convert?: boolean;
  beforeValidate?: (data: Static<TObject<T>>) => Static<TObject<T>>;
  lang?: string;
}
