import { useMemo } from "react";
import type { FieldError as TFieldError } from "react-hook-form";

interface Props {
  name: string;
  error?: TFieldError;
}

export const FieldError: React.FC<Props> = ({ error, name }) => {
  const message = useMemo(() => {
    return error?.message;
  }, [error]);

  if (!message) {
    return null;
  }

  return (
    <p className="mt-1 text-red-600 dark:text-red-500 text-xs font-medium">
      {message}
    </p>
  );
};
