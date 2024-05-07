import { $date } from "@/plugins/date.plugin";
import { type SchemaOptions } from "@sinclair/typebox";
import { TypeSystem } from "@sinclair/typebox/system";
import { isTypeOptional } from "@typeb/composition";

interface DateOptions extends SchemaOptions {
  format?: string;
}

export const TypeDateString = TypeSystem.Type<Date, DateOptions>(
  "DateString",
  (options, value) => {
    if (!value && isTypeOptional(options)) {
      return true;
    }

    if (!value) {
      options.errorInfo = {
        messageKey: "required",
      };
      return false;
    }

    const valid = $date(value as any).isValid();
    if (!valid) {
      options.errorInfo = {
        messageKey: "date",
      };
    }

    return valid;
  },
);
