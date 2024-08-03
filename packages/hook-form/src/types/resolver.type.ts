import type { Static, Type } from "@sinclair/typebox";
import type { ResolverOptions, ResolverResult } from "react-hook-form";

export type ExtraResolverOptions = {
  /** by default resolver will convert empty string into undefined, set this to true to skip and hnadle by your post change */
  skipSanitize?: boolean;
};

export type Resolver = <T extends ReturnType<typeof Type.Object>>(
  schema: T,
) => (
  values: Static<typeof schema>,
  context: any | undefined,
  options: ResolverOptions<Static<typeof schema>> & ExtraResolverOptions,
) => Promise<ResolverResult<Static<typeof schema>>>;
