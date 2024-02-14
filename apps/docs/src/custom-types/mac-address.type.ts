import { SchemaOptions } from "@sinclair/typebox";
import { TypeSystem } from "@sinclair/typebox/system";
import { isTypeOptional } from "@typeb/composition";

// Validate mac address
const PATTERN = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;

export const TypeMacAddressFormatted = TypeSystem.Type<string, SchemaOptions>(
  "MacAddressFormatted",
  (options = {}, value: any) => {
    console.log("test formatted");
    if (isTypeOptional(options) && !value) {
      return true;
    }

    const isValid = PATTERN.test(value);

    if (!isValid) {
      options.errorInfo = {
        messageKey: "macAddress",
      };
    }

    return isValid;
  },
);

export const TypeMacAddress = TypeSystem.Type<string>(
  "MacAddress",
  (options, value: any) => {
    console.log("test plain");
    return PATTERN.test(value);
  },
);
