"use client";

import React from "react";
import { Button, Card, Input, Label } from "../ui";
import { Type } from "@sinclair/typebox";
import { TypeEmail } from "@typeb/composition";
import { useForm } from "@/hooks/useForm";
import { myResolver } from "@/plugins/validator.plugin";
import { FieldError } from "../error/FieldError";
import { TypeDateString } from "@/custom-types/date.type";

const schema = Type.Object({
  email: Type.Optional(TypeEmail()),
  date: TypeDateString({ title: "tanggal" }),
});

export const CustomTypeExample: React.FC = () => {
  const { handleSubmit, register, registerError } = useForm({
    resolver: myResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <Card>
        <Card.Body className="space-y-4">
          <div>
            <Label>Email</Label>
            <Input {...register("email")} />
            <FieldError {...registerError("email")} />
          </div>

          <div>
            <Label>Date</Label>
            <Input type="date" {...register("date")} />
            <FieldError {...registerError("date")} />
          </div>

          <div>
            <Button type="submit">Submit</Button>
          </div>
        </Card.Body>
      </Card>
    </form>
  );
};
