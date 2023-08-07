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
  email: TypeEmail(),
  password: Type.String({ minLength: 8 }),
});

export const LoginForm: React.FC = () => {
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
            Sign In
          </Button>
        </div>
      </div>
    </form>
  );
};
