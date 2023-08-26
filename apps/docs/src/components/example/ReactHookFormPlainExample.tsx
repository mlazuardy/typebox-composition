"use client";
import { myResolver } from "@/plugins/validator.plugin";
import { Static, Type } from "@sinclair/typebox";
import { TypeEmail } from "@typeb/composition";
import { useForm } from "react-hook-form";

const schema = Type.Object({
  name: Type.String({ minLength: 1, required: true }),
  email: TypeEmail(),
});

export const ReactHookFormPlainExample: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: myResolver(schema),
  });

  const save = (data: Static<typeof schema>) => {
    // do something
  };

  return (
    <div>
      <form onSubmit={handleSubmit(save)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name")} />
          {!!errors?.name?.message && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email")} />
          {!!errors?.email?.message && <span>{errors.email.message}</span>}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
