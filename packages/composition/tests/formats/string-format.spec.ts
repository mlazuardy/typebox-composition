import { Type } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { AlphaDash } from "../../src";

describe("formats/string/alphadash", () => {
  it("should valid if valid alphadash", () => {
    const T = Type.String({ format: AlphaDash });
    const result = Value.Check(T, "alpha-dash");
    expect(result).toBe(true);
  });

  it("should invalid if not valid alphadash", () => {
    const T = Type.String({ format: "alphadash" });
    const result = Value.Check(T, "not an alpha dash");
    expect(result).toBe(false);
  });
});
