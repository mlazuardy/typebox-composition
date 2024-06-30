import { SchemaOptions } from "@sinclair/typebox";
import { TypeSystem } from "@sinclair/typebox/system";
import { isTypeOptional } from "../utils";
const PHONE_PATTERN = /^\d+$/;

export const TypePhoneNumber = TypeSystem.Type<string, SchemaOptions>(
  "Phone",
  (options, value) => {
    const isOptional = isTypeOptional(options);
    if (!value && isOptional) {
      return true;
    }
    const input = value as string;
    const valid = input?.startsWith("8");
    const patternValid = PHONE_PATTERN.test(input);

    if (!valid || !patternValid) {
      options.errorInfo = {
        messageKey: "phoneNumber",
      };
      return false;
    }

    if ((input?.length && input.length > 12) || input.length < 9) {
      options.errorInfo = {
        messageKey: "phoneNumber",
      };
      return false;
    }

    return true;
  },
);
