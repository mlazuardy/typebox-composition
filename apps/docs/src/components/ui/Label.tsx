import { CFC } from "@/types/component.interface";
import { LabelHTMLAttributes } from "react";
import { classNames } from "@/utils/classname";
import { Badge } from ".";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  noMargin?: boolean;
  badge?: string;
}

export const Label: CFC<Props> = ({
  children,
  className,
  noMargin,
  badge,
  ...props
}) => {
  return (
    <label
      className={classNames(
        "block text-sm font-medium leading-6 text-gray-900",
        !noMargin && "mb-1",
        className,
      )}
      {...props}
    >
      {children}

      {!!badge && <Badge className="ml-2">{badge}</Badge>}
    </label>
  );
};
