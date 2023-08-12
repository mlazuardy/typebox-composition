import { Type, TypeEmail } from "../../src";
import { validator } from "../validator";

describe("login", () => {
  const schema = Type.Object({
    email: TypeEmail({ title: "email" }),
    password: Type.String({ minLength: 8 }),
  });

  it("should return all errors", () => {
    const { errors } = validator.validate(schema, {
      email: "invalid",
    });
    expect(errors.length).toBeGreaterThanOrEqual(2);
  });

  it("should return password errors", () => {
    const { errors } = validator.validate(schema, {
      email: "email@test.com",
      password: "123",
    });

    expect(errors.length).toBe(1);
  });

  it("should return valid data", () => {
    const { errors } = validator.validate(schema, {
      email: "email@test.com",
      password: "12345678",
    });

    expect(errors.length).toBe(0);
  });
});
