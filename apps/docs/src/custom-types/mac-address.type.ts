import { SchemaOptions } from "@sinclair/typebox";
import { isTypeOptional, typeSystem } from "@typeb/composition";

// Validate mac address
const PATTERN = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;

export const TypeMacAddressFormatted = typeSystem.Type<string, SchemaOptions>(
  "MacAddressFormatted",
  (options = {}, value: any) => {
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

export const TypeMacAddress = typeSystem.Type<string>(
  "MacAddress",
  (options, value: any) => {
    return PATTERN.test(value);
  },
);
