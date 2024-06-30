import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { describe, expect, it } from "vitest";
import { AlphaDash } from "./string.format";

describe("Type.String({format: alphadash})", () => {
  it("should return true", () => {
    const value = "john-doe";
    const result = Value.Check(Type.String({ format: AlphaDash }), value);
    expect(result).toBe(true);
  });
});
