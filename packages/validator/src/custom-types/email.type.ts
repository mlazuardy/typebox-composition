import { StringOptions } from "@sinclair/typebox";
import { TypeSystem } from "@sinclair/typebox/system";
import { isTypeOptional } from "../utils";

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const TypeEmail = TypeSystem.Type<string, StringOptions>(
  "Email",
  (options, value) => {
    const input = value as string;

    const isOptional = isTypeOptional(options);

    if (isOptional && !input) {
      return true;
    }

    if (input?.length > 320) {
      return false;
    }

    return EMAIL_PATTERN.test(input);
  },
);
