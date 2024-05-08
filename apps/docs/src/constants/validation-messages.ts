import { en } from "@typeb/composition/dist"

export const validationMessages = {
  en: {
    ...en,
    stringAlphadash:
      "the {field} field must only contain letters, numbers, dashes and underscores.",

    date: "the {field} field must be a valid date.",

    macAddress: "the {field} field is not a valid mac address.",
  },
  id: {
    required: "{field} tidak boleh kosong.",

    array: "{field} harus array.",
    arrayMin: "{field} harus lebih atau sama dengan {expected} item.",
    arrayMax: "{field} harus kurang atau sama dengan {expected} item.",

    string: "{field} harus string.",
    stringEmpty: "{field} tidak boleh kosong.",
    stringMin: "{field} harus lebih atau sama dengan {expected} karakter.",
    stringMax: "{field} harus kurang atau sama dengan {expected} karakter.",

    email: "{field} harus berupa email yang valid.",

    number: "{field} harus berupa angka.",
    numberMin: "{field} harus lebih atau sama dengan {expected}.",
    numberMax: "{field} harus kurang atau sama dengan {expected}.",

    enum: "{field} tidak valid.",

    boolean: "{field} tidak valid.",

    date: "{field} harus tanggal yang valid.",

    macAddress: "{field} tidak valid.",
  },
};
