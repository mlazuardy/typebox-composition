import { useCallback } from "react";
import type {
  FieldError,
  FieldErrors,
  FieldValues,
  Path,
} from "react-hook-form";

export function useRegisterError<T extends FieldValues = FieldValues>(
  errors: FieldErrors<T>,
) {
  return useCallback(
    (name: Path<T>) => {
      return {
        name,
        error: errors[name] as FieldError,
      };
    },
    [errors],
  );
}
