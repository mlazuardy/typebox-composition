import { describe, expect, it } from "vitest";
import { Value } from "@sinclair/typebox/value";
import { TypeEmail } from "./email";
import { Type } from "@sinclair/typebox";

describe("TypeEmail()", () => {
  const email = "john@example.com";
  const notEmail = "john";

  it("should return true", () => {
    const result = Value.Check(TypeEmail(), email);
    expect(result).toBe(true);
  });

  it("should return false", () => {
    const check = (value?: any) => Value.Check(TypeEmail(), value);
    const results = [check(notEmail), check(undefined), check(null), check("")];
    results.forEach((result) => {
      expect(result).toBe(false);
    });
  });

  it("should return true if null, undefined, or empty string", () => {
    const T = Type.Optional(TypeEmail());
    const [nullResult, undefinedResult, emptyStringResult] = [
      Value.Check(T, undefined),
      Value.Check(T, null),
      Value.Check(T, ""),
    ];

    expect(nullResult).toBe(true);
    expect(undefinedResult).toBe(true);
    expect(emptyStringResult).toBe(true);
  });
});
