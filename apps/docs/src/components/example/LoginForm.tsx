"use client";

import React, { useState } from "react";
import { Button, Input, Label, Select } from "../ui";
import { Static, Type } from "@sinclair/typebox";
import { TypeEmail } from "@typeb/validator";
import { useForm } from "react-hook-form";
import { typeboxResolver } from "@typeb/hook-form";
import { useRegisterError } from "@/hooks/useRegisterError";
import { FieldError } from "../error/FieldError";
import { validator } from "@/plugins/validator.plugin";

const schema = Type.Object({
  email: TypeEmail(),
  password: Type.String({ minLength: 8 }),
});

export const LoginForm: React.FC = () => {
  const [lang, setLang] = useState("en");
  const { handleSubmit, register, formState } = useForm({
    resolver: typeboxResolver(schema, { lang, validator: validator }),
  });
  const registerError = useRegisterError(formState.errors);

  const submit = (data: Static<typeof schema>) => {
    alert("data valid");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border border-gray-300 dark:border-slate-600 rounded-md px-4 lg:px-6 py-4">
      <div>
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
      </div>

      <div className="space-y-4">
        <div>
          <Label>Language</Label>
          <Select onChange={(e) => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="id">Bahasa Indonesia</option>
          </Select>
        </div>
      </div>
    </div>
  );
};
