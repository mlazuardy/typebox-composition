import { TypeComposition } from "../src";
import en from "../src/locales/en";

export const validator = new TypeComposition({
  lang: "en",
  messages: {
    en: {
      ...en,
      stringMin: ({ field, expected }) =>
        `the ${field} must be at least ${expected} characters long.`,
    },
  },
});
