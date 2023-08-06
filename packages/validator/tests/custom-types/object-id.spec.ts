import { Value } from "@sinclair/typebox/value";
import { TypeObjectId } from "../../src";

const EXAMPLE_OID = "507f1f77bcf86cd799439011";

describe("custom-types/object-id", () => {
  it("should valid if oid string", () => {
    const T = TypeObjectId();
    const result = Value.Check(T, EXAMPLE_OID);
    expect(result).toBe(true);
  });

  it("should invalid if not oid", () => {
    const T = TypeObjectId();
    const result = Value.Check(T, "123");
    expect(result).toBe(false);
  });
});
