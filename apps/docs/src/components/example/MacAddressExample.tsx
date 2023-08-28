"use client";

import { Type } from "@sinclair/typebox";
import { Button, Card, Input, Label } from "../ui";
import { FieldError } from "../error/FieldError";
import { useForm } from "@/hooks/useForm";
import { myResolver } from "@/plugins/validator.plugin";
import { useMemo } from "react";
import {
  TypeMacAddress,
  TypeMacAddressFormatted,
} from "@/custom-types/mac-address.type";

interface Props {
  plain?: boolean;
  optional?: boolean;
}

export const MacAddressExample: React.FC<Props> = ({
  plain = false,
  optional = false,
}) => {
  const schema = useMemo(() => {
    const T = plain ? TypeMacAddress() : TypeMacAddressFormatted();

    return Type.Object({
      macAddress: optional ? Type.Optional(T) : T,
    });
  }, [plain, optional]);

  const { handleSubmit, register, registerError } = useForm({
    resolver: myResolver(schema),
  });

  const submit = () => {
    //
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Card>
        <Card.Body className="space-y-4">
          <div>
            <Label>Mac Address Lookup {optional && "(Optional)"}</Label>
            <Input {...register("macAddress")} />
            <FieldError {...registerError("macAddress")} />
          </div>

          <div>
            <Button type="submit">Check Mac Address</Button>
          </div>
        </Card.Body>
      </Card>
    </form>
  );
};
