import { validationMessages } from "@/constants/validation-messages";
import { TObject, TProperties } from "@sinclair/typebox";
import { typeboxResolver } from "@typeb/hook-form";
import { TypeComposition } from "@typeb/composition";

type MyResolverOptions = {
  lang?: string;
};

export const validator = new TypeComposition({
  lang: "en",
  messages: validationMessages,
});

/**
 * for example only
 */
export const plainValidator = new TypeComposition({
  lang: "en",
  messages: {
    en: {},
    id: {},
  },
});

export function myResolver<T extends TProperties>(
  schema: TObject<T>,
  options?: MyResolverOptions,
) {
  return typeboxResolver(schema, {
    ...options,
    validator,
  });
}

export function myPlainResolver<T extends TProperties>(
  schema: TObject<T>,
  options?: MyResolverOptions,
) {
  return typeboxResolver(schema, {
    ...options,
    validator: plainValidator,
  });
}
