"use client";

import { useForm } from "@/hooks/useForm";
import { myResolver } from "@/plugins/validator.plugin";
import { Type } from "@sinclair/typebox";
import { Button, Card, Input, Label } from "../ui";
import { FieldError } from "../error/FieldError";
import { LangSelector } from "../common/LangSelector";
import { useState } from "react";

const schema = Type.Object({
  firstName: Type.String({
    minLength: 3,
    required: true,
    field: {
      en: "first name",
      id: "nama depan",
    },
  }),
  lastName: Type.String({
    minLength: 3,
    required: true,
    field: {
      en: "last name",
      id: "nama belakang",
    },
  }),
});

export const ErrorMessageExample: React.FC = () => {
  const [lang, setLang] = useState("en");

  const { handleSubmit, register, registerError } = useForm({
    resolver: myResolver(schema, { lang }),
  });

  const save = () => {
    //
  };

  return (
    <form onSubmit={handleSubmit(save)}>
      <Card className="not-prose">
        <Card.Header className="flex justify-end">
          <LangSelector onChange={setLang} value={lang} />
        </Card.Header>

        <Card.Body className="space-y-4">
          <div>
            <Label>{lang === "en" ? "First Name" : "Nama Depan"}</Label>
            <Input {...register("firstName")} />
            <FieldError {...registerError("firstName")} />
          </div>

          <div>
            <Label>{lang === "en" ? "Last Name" : "Nama Belakang"}</Label>
            <Input {...register("lastName")} />
            <FieldError {...registerError("lastName")} />
          </div>

          <div>
            <Button type="submit" className="min-w-btn">
              Submit
            </Button>
          </div>
        </Card.Body>
      </Card>
    </form>
  );
};
