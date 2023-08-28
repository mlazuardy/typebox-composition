import { classNames } from "@/utils/classname";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      type="text"
      className={classNames(
        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
        "dark:text-white dark:bg-transparent dark:ring-gray-500 dark:placeholder:text-gray-300 dark:focus:ring-indigo-500",
      )}
      {...props}
      ref={ref}
    />
  );
});

Input.displayName = "Input";
