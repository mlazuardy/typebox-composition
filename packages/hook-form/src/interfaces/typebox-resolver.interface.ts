import type { Static, TObject, TProperties } from "@sinclair/typebox";
import type { TypeComposition } from "@typeb/composition";

export interface TypeboxResolverOptions<T extends TProperties> {
  validator?: TypeComposition;
  convert?: boolean;
  beforeValidate?: (data: Static<TObject<T>>) => Static<TObject<T>>;
  lang?: string;
}
