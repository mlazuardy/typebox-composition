import type { Static, Type } from "@sinclair/typebox";
import type { ResolverOptions, ResolverResult } from "react-hook-form";

export type Resolver = <T extends ReturnType<typeof Type.Object>>(
  schema: T,
) => (
  values: Static<typeof schema>,
  context: any | undefined,
  options: ResolverOptions<Static<typeof schema>>,
) => Promise<ResolverResult<Static<typeof schema>>>;
