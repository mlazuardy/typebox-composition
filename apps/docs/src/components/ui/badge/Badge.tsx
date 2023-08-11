import { CFC } from "@/types/component.interface";
import { classNames } from "@/utils/classname";

export const Badge: CFC<{ className?: string }> = ({ children, className }) => {
  return (
    <span
      className={classNames(
        "inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10",
        "dark:bg-gray-400/10 dark:text-gray-400",
        className,
      )}
    >
      {children}
    </span>
  );
};
