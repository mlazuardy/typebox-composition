"use client";

import { FieldError } from "@/components/error/FieldError";
import { ExampleLayout } from "@/components/example/ExampleLayout";
import { Button, Card, Input, Label } from "@/components/ui";
import { useRegisterError } from "@/hooks/useRegisterError";
import { myResolver } from "@/plugins/validator.plugin";
import { Type } from "@sinclair/typebox";
import { TypeEmail } from "@typeb/composition";
import { useForm } from "react-hook-form";

const schema = Type.Object({
  email: TypeEmail(),
});

const code = `
import { Type } from "@sinclair/typebox";
import { TypeEmail } from "@typeb/composition";

const schema = Type.Object({
  email: TypeEmail(),
});
`;

export const EmailCustomType: React.FC = () => {
  const { handleSubmit, register, formState } = useForm({
    resolver: myResolver(schema),
  });

  const registerError = useRegisterError(formState.errors);

  const save = () => {
    //
  };

  return (
    <ExampleLayout codes={{ code, lang: "tsx", name: "code" }}>
      <form onSubmit={handleSubmit(save)}>
        <Card>
          <Card.Body className="space-y-4">
            <div>
              <Label>Email</Label>
              <div className="w-full lg:max-w-sm">
                <Input {...register("email")} />
              </div>
              <FieldError {...registerError("email")} />
            </div>

            <div>
              <Button type="submit" className="min-w-btn">
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </form>
    </ExampleLayout>
  );
};
