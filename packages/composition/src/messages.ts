export const messages: Record<string, any> = {
  en: {
    required: "the {field} field is required.",

    arrayMin: "the {field} field must be more or equal to {expected} items.",
    arrayMax: "the {field} field must be less or equal to {expected} items.",

    string: "the {field} field must be a string",
    stringEmpty: "the {field} field is required.",
    stringMin:
      "the {field} field must be greater or equal to {expected} characters.",
    stringMax:
      "the {field} field must be less or equal to {expected} characters.",

    email: "the {field} field must be a valid email.",

    number: "the {field} field must be a valid number",
    numberMin: "the {field} field must be greater or equal to {expected}",
    numberMax: "the {field} field must be less or equal to {expected}",

    boolean: "the {field} must be true or false",
  },
};