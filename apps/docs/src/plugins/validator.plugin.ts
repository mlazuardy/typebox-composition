import { validationMessages } from "@/constants/validation-messages";
import { TObject, TProperties } from "@sinclair/typebox";
import { typeboxResolver } from "@typeb/hook-form";
import { TypeValidator } from "@typeb/composition";

type MyResolverOptions = {
  lang?: string;
};

export const validator = new TypeValidator({
  lang: "en",
  messages: validationMessages,
});

/**
 *
 */
export const plainValidator = new TypeValidator({
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
