"use client";

import React, { useState } from "react";
import { Button, Input, Label, RadioOptions, Select, Textarea } from "../ui";
import { Static, Type } from "@sinclair/typebox";
import { useForm } from "react-hook-form";
import { useRegisterError } from "@/hooks/useRegisterError";
import { FieldError } from "../error/FieldError";
import { myResolver } from "@/plugins/validator.plugin";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

const schema = Type.Object({
  firstName: Type.String({ title: "first name", minLength: 8, maxLength: 10 }),
  lastName: Type.String({ minLength: 8, maxLength: 10 }),
  age: Type.Number({ minimum: 18 }),
  role: Type.Enum(Role),
  bio: Type.Optional(Type.String({ minLength: 50 })),
  termsAccept: Type.Boolean({ title: "terms" }),
});

const userOptions = [
  { name: "User", value: Role.USER },
  { name: "Admin", value: Role.ADMIN },
  { name: "Invalid Role", value: "INVALID" },
];

export const SignupForm: React.FC = () => {
  const [lang, setLang] = useState("en");
  const { handleSubmit, register, formState, setValue, watch } = useForm({
    resolver: myResolver(schema, { lang }),
    defaultValues: {
      termsAccept: false,
    }
  });
  const registerError = useRegisterError(formState.errors);

  const submit = (data: Static<typeof schema>) => {
    alert("data valid");
  };

  return (
    <div className="grid not-prose grid-cols-1 lg:grid-cols-12 gap-4 px-4 lg:px-6 py-4 rounded-md border border-gray-300">
      <div className="lg:col-span-8">
        <form onSubmit={handleSubmit(submit)}>
          <div className="space-y-4">
            <div>
              <Label badge="title: first name, min: 8, max: 10">
                First Name
              </Label>
              <Input {...register("firstName")} />
              <FieldError {...registerError("firstName")} />
            </div>

            <div>
              <Label badge="min:8, max: 10">Last Name</Label>
              <Input {...register("lastName")} />
              <FieldError {...registerError("lastName")} />
            </div>

            <div>
              <Label badge="number, min: 18">Age</Label>
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
              <Label>Role</Label>
              <RadioOptions
                options={userOptions}
                onChange={(v: any) => setValue("role", v.value)}
                className="grid grid-cols-3 gap-2"
              />
              <FieldError {...registerError("role")} />
            </div>

            <div>
              <Label badge="optional, min: 50">Bio</Label>
              <Textarea
                {...register("bio", {
                  setValueAs(value) {
                    return !value ? undefined : value;
                  },
                })}
              />
              <p className="text-xs mt-1 text-gray-500">
                Note that empty string will be validate so you need to convert
                it to undefined.
              </p>
              <FieldError {...registerError("bio")} />
            </div>

            <div>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  {...register("termsAccept")}
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900 select-none"
                >
                  By registering account, you agree that you will received
                  unlimited money.
                </label>
              </div>

              <FieldError {...registerError("termsAccept")} />
            </div>

            <div>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>

      <div className="lg:col-span-4 space-y-4">
        <div>
          <Label>Language</Label>
          <Select onChange={(e) => setLang(e.target.value)}>
            <option value="en">English</option>
            <option value="id">Bahasa Indonesia</option>
          </Select>
          <p className="mt-1 text-xs text-gray-500">Re-submit to take effect</p>
        </div>
      </div>
    </div>
  );
};
