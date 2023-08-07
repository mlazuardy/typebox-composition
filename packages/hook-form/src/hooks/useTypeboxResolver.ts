import type { TObject, TProperties } from "@sinclair/typebox";
import { useMemo } from "react";
import { typeboxResolver } from "../typebox-resolver";
import type { TypeboxResolverOptions } from "../interfaces";

export function useTypeboxResolver<T extends TProperties>(
  schema: TObject<T>,
  options?: TypeboxResolverOptions<T>,
) {
  return useMemo(() => {
    return typeboxResolver(schema, options);
  }, [schema, options]);
}
