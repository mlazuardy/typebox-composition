import type { Static, TObject, TProperties } from "@sinclair/typebox";
import type { TypeComposition, ValidateOptions } from "@typeb/composition";

export interface TypeboxResolverOptions<T extends TProperties>
  extends ValidateOptions {
  validator: TypeComposition;
  convert?: boolean;
  beforeValidate?: (data: Static<TObject<T>>) => Static<TObject<T>>;
}
