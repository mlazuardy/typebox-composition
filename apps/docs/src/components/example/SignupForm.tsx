"use client";

import React from "react";
import { Button, Input, Label } from "../ui";
import { Static, Type } from "@sinclair/typebox";
import { TypeEmail } from "@typeb/validator";
import { useForm } from "react-hook-form";
import { typeboxResolver } from "@typeb/hook-form";
import { useRegisterError } from "@/hooks/useRegisterError";
import { FieldError } from "../error/FieldError";

const schema = Type.Object({
  firstName: Type.String({ title: "first name", minLength: 8, maxLength: 10 }),
  lastName: Type.String({ minLength: 8, maxLength: 10 }),
  email: TypeEmail(),
  password: Type.String({ minLength: 8 }),
  age: Type.Number({ minimum: 18 }),
});

export const SignupForm: React.FC = () => {
  const { handleSubmit, register, formState } = useForm({
    resolver: typeboxResolver(schema),
  });
  const registerError = useRegisterError(formState.errors);

  const submit = (data: Static<typeof schema>) => {
    alert("data valid");
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <Label>First Name</Label>
            <Input {...register("firstName")} />
            <FieldError {...registerError("firstName")} />
          </div>

          <div>
            <Label>Last Name</Label>
            <Input {...register("lastName")} />
            <FieldError {...registerError("lastName")} />
          </div>
        </div>

        <div>
          <Label>Age</Label>
          <Input
            type="number"
            {...register("age", {
              setValueAs(value) {
                return Number(value);
              },
            })}
          />
          <FieldError {...registerError("age")} />
        </div>

        <div>
          <Label>Email</Label>
          <Input {...register("email")} />
          <FieldError {...registerError("email")} />
        </div>

        <div>
          <Label>Password</Label>
          <Input type="password" {...register("password")} />
          <FieldError {...registerError("password")} />
        </div>

        <div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};
