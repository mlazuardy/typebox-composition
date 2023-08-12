"use client";

import { FieldError } from "@/components/error/FieldError";
import { ExampleLayout } from "@/components/example/ExampleLayout";
import { Button, Card, Input, Label, Select } from "@/components/ui";
import { useRegisterError } from "@/hooks/useRegisterError";
import { myResolver } from "@/plugins/validator.plugin";
import { Type } from "@sinclair/typebox";
import { TypeEmail } from "@typeb/composition";
import { useFieldArray, useForm } from "react-hook-form";

enum Role {
  MEMBER = "MEMBER",
  OWNER = "OWNER",
}

const schema = Type.Object({
  teams: Type.Array(
    Type.Object({
      email: TypeEmail(),
      role: Type.Enum(Role),
    }),
    { minItems: 1, maxItems: 5 },
  ),
});

const code = `
import { Type } from "@sinclair/typebox";
import { TypeEmail } from "@typeb/composition";

enum Role {
  MEMBER = "MEMBER",
  OWNER = "OWNER",
}

const schema = Type.Object({
  teams: Type.Array(
    // you can add title property to format the label so it wont return teams.{index}.{field}
    Type.Object({
      email: TypeEmail(),
      role: Type.Enum(Role),
    }),
    { minItems: 1, maxItems: 5 },
  ),
});
`;

const defaultTeam = {
  email: "",
  role: Role.MEMBER,
};

const InviteTeamForm: React.FC = () => {
  const { handleSubmit, register, formState, control } = useForm({
    resolver: myResolver(schema),
    // defaultValues: {
    //   teams: [defaultTeam],
    // },
  });

  const { fields, append } = useFieldArray({
    control,
    name: "teams",
  });

  const registerError = useRegisterError(formState.errors);

  const invite = () => {
    //
  };

  return (
    <form onSubmit={handleSubmit(invite)}>
      <Card className="overflow-hidden">
        <Card.Header>
          <h3>Invite new members by email address</h3>
          <FieldError {...registerError("teams")} />
        </Card.Header>
        <Card.Body className="space-y-4">
          {fields.map((field, index) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" key={index}>
              <div>
                <Label>Email</Label>
                <Input
                  {...register(`teams.${index}.email`)}
                  placeholder="email@address.com"
                />
                <FieldError {...registerError(`teams.${index}.email`)} />
              </div>

              <div>
                <Label>Role</Label>
                <Select {...register(`teams.${index}.role`)}>
                  <option value="MEMBER">Member</option>
                  <option value="OWNER">Owner</option>
                  <option value="INVALID">Invalid Role</option>
                </Select>
                <FieldError {...registerError(`teams.${index}.role`)} />
              </div>
            </div>
          ))}

          <div>
            <button
              type="button"
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium"
              onClick={() => append(defaultTeam)}
            >
              + Add More
            </button>
          </div>
        </Card.Body>
        <Card.Footer className="flex justify-end">
          <Button type="submit" className="min-w-[120px]">
            Invite
          </Button>
        </Card.Footer>
      </Card>
    </form>
  );
};

export const InviteTeamExample: React.FC = () => {
  return (
    <ExampleLayout codes={[{ code, lang: "tsx", name: "Code" }]}>
      <InviteTeamForm />
    </ExampleLayout>
  );
};
