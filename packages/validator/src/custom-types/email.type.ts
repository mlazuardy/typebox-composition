import { StringOptions } from "@sinclair/typebox";
import { TypeSystem } from "@sinclair/typebox/system";

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const TypeEmail = TypeSystem.Type<string, StringOptions>(
  "Email",
  (options, value) => {
    const input = value as string;

    const optionalSymbol = Object.getOwnPropertySymbols(options).find((s) => {
      return s.description === "TypeBox.Optional";
    });

    if (input?.length > 320) {
      return false;
    }

    if (optionalSymbol && !input) {
      return true;
    }

    return EMAIL_PATTERN.test(input);
  },
);
