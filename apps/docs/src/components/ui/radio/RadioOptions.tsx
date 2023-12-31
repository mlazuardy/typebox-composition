"use client";

import { classNames } from "@/utils/classname";
import { RadioGroup } from "@headlessui/react";

interface Props {
  onChange?: (val: any) => any;
  options: {
    name: string;
    value: any;
  }[];
  className?: string;
  value?: any;
}

export const RadioOptions: React.FC<Props> = ({
  onChange,
  options,
  className,
  value,
}) => {
  return (
    <RadioGroup
      onChange={onChange}
      as="div"
      className={className}
      suppressHydrationWarning
      value={value}
    >
      {options.map((option) => (
        <RadioGroup.Option
          key={option.name}
          value={option}
          className={({ active, checked }) =>
            classNames(
              active && "ring-2 ring-indigo-600 ring-offset-2",
              checked
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50",
              "flex items-center justify-center rounded-md py-1.5 px-3 text-sm font-semibold uppercase sm:flex-1 cursor-pointer focus:outline-none",
            )
          }
          suppressHydrationWarning
        >
          <RadioGroup.Label as="span" suppressHydrationWarning>
            {option.name}
          </RadioGroup.Label>
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
