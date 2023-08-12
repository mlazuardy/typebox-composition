import {
  FieldValues,
  useForm as ReactUseForm,
  UseFormProps,
} from "react-hook-form";
import { useRegisterError } from "./useRegisterError";

export function useForm<TFieldValues extends FieldValues = FieldValues>(
  props: UseFormProps<TFieldValues> = {},
) {
  const formReturn = ReactUseForm(props);
  const registerError = useRegisterError(formReturn.formState.errors);

  return {
    ...formReturn,
    registerError,
  } as const;
}
