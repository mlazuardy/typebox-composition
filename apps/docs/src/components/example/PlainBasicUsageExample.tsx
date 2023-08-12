"use client";

import { Static, Type } from "@sinclair/typebox";
import { Button, Card, Input, Label } from "../ui";
import { ChangeEvent, FormEvent, useState } from "react";
import { validator } from "@/plugins/validator.plugin";
import { SchemaError } from "@typeb/composition";

interface Props {
  useTitle?: boolean;
}

const schema = Type.Object({
  firstName: Type.String({ minLength: 8, maxLength: 50 }),
  lastName: Type.String({ minLength: 8, maxLength: 50 }),
});

/** This example component does not use react hook form resolver */
export const PlainBasicUsageExample: React.FC<Props> = () => {
  const [errors, setErrors] = useState<SchemaError[]>([]);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();

  const createUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { errors: incomingErrors } = validator.validate(schema, {
      firstName,
      lastName,
    });

    setErrors(incomingErrors);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    name === "firstName" ? setFirstName(value) : setLastName(value);
  };

  const hasError = (field: keyof Static<typeof schema>) => {
    return errors.some((err) => err.field === field);
  };

  const getErrorMessage = (field: keyof Static<typeof schema>) => {
    return errors.find((err) => err.field === field)?.message;
  };

  return (
    <form onSubmit={createUser}>
      <Card>
        <Card.Body className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <Label>First Name</Label>
              <Input name="firstName" onChange={handleChange} />
              {hasError("firstName") && (
                <p className="mt-1 text-red-500 text-xs">
                  {getErrorMessage("firstName")}
                </p>
              )}
            </div>

            <div>
              <Label>Last Name</Label>
              <Input name="lastName" onChange={handleChange} />
              {hasError("lastName") && (
                <p className="mt-1 text-red-500 text-xs">
                  {getErrorMessage("lastName")}
                </p>
              )}
            </div>

            <div>
              <Button className="min-w-btn" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </form>
  );
};
