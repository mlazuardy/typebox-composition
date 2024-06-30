import { Value } from "@sinclair/typebox/value";
import { describe, expect, it } from "vitest";
import { TypeObjectId } from "./object-id";
import { Type } from "@sinclair/typebox";

function random24() {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < 24; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

describe("TypeObjectId()", () => {
  const objectId = "507f1f77bcf86cd799439011";
  it("should return true", () => {
    const result = Value.Check(TypeObjectId(), objectId);
    const optionalResult = Value.Check(
      Type.Optional(TypeObjectId()),
      undefined,
    );
    expect(result).toBe(true);
    expect(optionalResult).toBe(true);
  });

  it("should return false", () => {
    const result = Value.Check(TypeObjectId(), "123");
    expect(result).toBe(false);
  });

  it("return false against random str with the same oid length", () => {
    const result = Value.Check(TypeObjectId(), random24());
    expect(result).toBe(false);
  });
});
