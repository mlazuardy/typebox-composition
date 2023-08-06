import { TypeValidator, messages } from "../src";

export const validator = new TypeValidator({
  lang: "en",
  messages: {
    en: {
      ...messages.en,
      stringMin: ({ field, expected }) =>
        `the ${field} must be at least ${expected} characters long.`,
    },
  },
});
