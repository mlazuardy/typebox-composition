import { Value } from "@sinclair/typebox/value";
import { TypeEmail } from "../../src";

describe("custom-types/email", () => {
  it("should valid if email valid", () => {
    expect(Value.Check(TypeEmail(), "example@test.com")).toBe(true);
  });

  it("should not valid if email invalid", () => {
    expect(Value.Check(TypeEmail(), "example")).toBe(false);
  });
});
