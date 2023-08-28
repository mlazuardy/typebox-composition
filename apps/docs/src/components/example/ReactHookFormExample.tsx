"use client";
import { useForm } from "@/hooks/useForm";
import { myResolver } from "@/plugins/validator.plugin";
import { Static, Type } from "@sinclair/typebox";
import { TypeEmail } from "@typeb/composition";
import { Button, Card, Input, Label } from "../ui";
import { FieldError } from "../error/FieldError";

const schema = Type.Object({
  name: Type.String({
    minLength: 8,
    maxLength: 50,
    messages: {
      en: {
        required: "required coy",
        stringMin: "{field} must be at least {expected} characters.",
      },
    },
  }),
  email: TypeEmail(),
});

export const ReactHookFormExample: React.FC = () => {
  const { handleSubmit, register, registerError } = useForm({
    resolver: myResolver(schema),
  });

  const save = (data: Static<typeof schema>) => {
    // do something
  };

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <Card>
          <Card.Body>
            <div className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input {...register("name")} />
                <FieldError {...registerError("name")} />
              </div>

              <div>
                <Label>Email</Label>
                <Input {...register("email")} />
                <FieldError {...registerError("email")} />
              </div>

              <div>
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </form>
    </div>
  );
};
