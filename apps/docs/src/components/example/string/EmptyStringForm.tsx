"use client";
import { FieldError } from "@/components/error/FieldError";
import { Button, Card, Input, Label } from "@/components/ui";
import { useForm } from "@/hooks/useForm";
import { myResolver } from "@/plugins/validator.plugin";
import { Type } from "@sinclair/typebox";
import { useMemo } from "react";

interface Props {
  isRequired?: boolean;
}

export const EmptyStringForm: React.FC<Props> = ({ isRequired = false }) => {
  const schema = useMemo(() => {
    return Type.Object({
      name: Type.String({ minLength: 3, required: isRequired }),
    });
  }, [isRequired]);

  const { handleSubmit, register, registerError } = useForm({
    resolver: myResolver(schema),
  });

  const save = () => {
    //
  };

  return (
    <form onSubmit={handleSubmit(save)}>
      <Card className="not-prose">
        <Card.Header>
          <p className="text-sm">
            Try to click submit button on this form validation without inserting
            any value to the name field
          </p>
        </Card.Header>
        <Card.Body className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input {...register("name")} />
            <FieldError {...registerError("name")} />
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
