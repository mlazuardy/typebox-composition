export const validationMessages = {
  en: {
    required: "the {field} field is required.",

    arrayMin: "the {field} field must be more or equal to {expected} items.",
    arrayMax: "the {field} field must be less or equal to {expected} items.",

    string: "the {field} field must be a string",
    stringEmpty: "the {field} field is required.",
    stringEnum: "the {field} field is invalid.",
    stringMin:
      "the {field} field must be greater or equal to {expected} characters.",
    stringMax:
      "the {field} field must be less or equal to {expected} characters.",

    emailEmpty: "the {field} field is required.",
    email: "the {field} field must be a valid email.",

    number: "the {field} field must be a valid number.",
    numberMin: "the {field} field must be greater or equal to {expected}.",
    numberMax: "the {field} field must be less or equal to {expected}.",

    enum: "the {field} field is invalid.",
  },
  id: {
    required: "{field} tidak boleh kosong.",

    arrayMin: "{field} harus lebih atau sama dengan {expected} item.",
    arrayMax: "{field} harus kurang atau sama dengan {expected} item.",

    string: "{field} harus string.",
    stringEmpty: "{field} tidak boleh kosong.",
    stringEnum: "{field} tidak valid.",
    stringMin: "{field} harus lebih atau sama dengan {expected} karakter.",
    stringMax: "{field} harus kurang atau sama dengan {expected} karakter.",

    emailEmpty: "{field} tidak boleh kosong",
    email: "{field} harus berupa email yang valid.",

    number: "{field} harus berupa angka.",
    numberMin: "{field} harus lebih atau sama dengan {expected}.",
    numberMax: "{field} harus kurang atau sama dengan {expected}.",

    enum: "{field} tidak valid.",
  },
};
