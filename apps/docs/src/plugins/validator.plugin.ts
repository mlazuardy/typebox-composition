import { validationMessages } from "@/constants/validation-messages";
import { TypeValidator } from "@typeb/validator";

export const validator = new TypeValidator({
  lang: "en",
  messages: validationMessages,
});
