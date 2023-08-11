"use client";

import { FieldError } from "@/components/error/FieldError";
import { Button, Input, Label, RadioOptions } from "@/components/ui";
import { useRegisterError } from "@/hooks/useRegisterError";
import { myPlainResolver, myResolver } from "@/plugins/validator.plugin";
import { Type } from "@typeb/composition";
import { useForm } from "react-hook-form";

enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

const genderOptions = [
  {
    name: "Male",
    value: Gender.MALE,
  },
  {
    name: "Female",
    value: Gender.FEMALE,
  },
  {
    name: "Unknown",
    value: "unknown",
  },
];

const schema = Type.Object({
  name: Type.String({ minLength: 1, maxLength: 8 }),
  age: Type.Number({ minimum: 18 }),
  gender: Type.Enum(Gender),
});

const FormComponent: React.FC<{ plain?: boolean }> = ({ plain = false }) => {
  const { handleSubmit, register, formState, setValue } = useForm({
    resolver: plain ? myPlainResolver(schema) : myResolver(schema),
  });
  const registerError = useRegisterError(formState.errors);
  console.log(formState.errors);

  const submit = () => {
    //
  };

  return (
    <div className="border border-gray-300 px-4 lg:px-6 py-4 rounded-md bg-white">
      <form className="space-y-4" onSubmit={handleSubmit(submit)}>
        <div>
          <h4 className="my-0">
            {plain ? "Default Typebox Messages" : "With Typebox Composition"}
          </h4>
        </div>

        <div>
          <Label badge="required min: 1, max: 8">Name</Label>
          <Input {...register("name")} />
          <FieldError {...registerError("name")} />
        </div>

        <div>
          <Label badge="required min:18">Age</Label>
          <Input
            {...register("age", {
              setValueAs(value) {
                return value === undefined || value === "" || value === null
                  ? undefined
                  : Number(value);
              },
            })}
          />
          <FieldError {...registerError("age")} />
        </div>

        <div>
          <Label badge="required enum: male, female">Gender</Label>
          <RadioOptions
            options={genderOptions}
            onChange={(v) => setValue("gender", v?.value)}
            className="grid grid-cols-3 gap-2"
          />
          <FieldError {...registerError("gender")} />
        </div>

        <div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export const OverviewExample: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <FormComponent plain />

      <FormComponent />
    </div>
  );
};
