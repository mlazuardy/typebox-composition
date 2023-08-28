import {
  FieldError,
  FieldValues,
  Path,
  useForm as ReactUseForm,
  UseFormProps,
} from "react-hook-form";
import { useCallback } from "react";

export function useForm<TFieldValues extends FieldValues = FieldValues>(
  props: UseFormProps<TFieldValues> = {},
) {
  const { formState, ...rest } = ReactUseForm(props);
  const registerError = useCallback(
    (name: Path<TFieldValues>) => {
      return {
        name,
        error: formState.errors[name] as FieldError,
      };
    },
    [formState.errors],
  );

  return {
    ...rest,
    formState, // re-export formState just in case we need it
    registerError,
  } as const;
}
