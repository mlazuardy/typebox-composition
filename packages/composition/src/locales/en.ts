import { LocalMessage } from "../interfaces/message.interface";

const messages: LocalMessage = {
  required: "the {field} field is required.",

  arrayMin: "the {field} field must be more or equal to {expected} items.",
  arrayMax: "the {field} field must be less or equal to {expected} items.",

  boolean: "the {field} must be true or false.",

  email: "the {field} field must be a valid email.",

  enum: "the {field} field is invalid.",

  string: "the {field} field must be a string",
  stringEmpty: "the {field} field is required.",
  stringMin:
    "the {field} field must be greater or equal to {expected} characters.",
  stringMax:
    "the {field} field must be less or equal to {expected} characters.",

  number: "the {field} field must be a valid number",
  numberMin: "the {field} field must be greater or equal to {expected}",
  numberMax: "the {field} field must be less or equal to {expected}",

  objectId: "the {field} field must be a valid object id.",
};

export default messages;
