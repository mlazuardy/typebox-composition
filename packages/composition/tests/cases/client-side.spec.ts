import { Type } from "@sinclair/typebox";

describe("client side", () => {
  const schema = Type.Object({
    firstName: Type.String({ minLength: 1 }),
    lastName: Type.String({ minLength: 1 }),
  });

  it("undefined or null value should return Kind Error", () => {

  })
});
