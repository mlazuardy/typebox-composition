import { describe, expect, it } from "vitest";
import { t } from "../type-system";
import { Value } from "@sinclair/typebox/value";

describe("TypeNullable()", () => {
  it("should return true", () => {
    const schema = t.Nullable(t.Number());
    expect(Value.Check(schema, null)).toBe(true);
    expect(Value.Check(schema, 1)).toBe(true);
  });
});
