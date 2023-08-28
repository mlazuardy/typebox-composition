"use client";

import { RadioGroup } from "@headlessui/react";
import { classNames } from "@/utils/classname";

const options = [
  {
    name: "English",
    value: "en",
  },
  {
    name: "Indonesia",
    value: "id",
  },
];

interface Props {
  onChange?: (val: any) => any;
  value?: any;
  className?: string;
}

export const LangSelector: React.FC<Props> = ({
  onChange,
  className,
  value = "en",
}) => {
  return (
    <RadioGroup
      onChange={onChange}
      as="div"
      className={classNames(className, "flex space-x-2")}
      suppressHydrationWarning
      value={value}
    >
      {options.map((option) => (
        <RadioGroup.Option
          key={option.name}
          value={option.value}
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
