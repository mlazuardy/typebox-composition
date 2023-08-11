import { classNames } from "@/utils/classname";
import { HTMLAttributes } from "react";

type DivProps = HTMLAttributes<HTMLDivElement>;

export const CardBody: React.FC<DivProps> = ({ children, className }) => {
  return (
    <div className={classNames("px-4 lg:px-6 py-4", className)}>{children}</div>
  );
};

export const CardHeader: React.FC<DivProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "px-4 lg:px-6 py-4 border-b border-gray-300 dark:border-gray-600",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardFooter: React.FC<DivProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "px-4 lg:px-6 py-3 border-t border-gray-300 dark:border-gray-600",
        className,
      )}
    >
      {children}
    </div>
  );
};

export type CardComponent = React.FC<DivProps> & {
  Body: typeof CardBody;
  Header: typeof CardHeader;
  Footer: typeof CardFooter;
};

export const Card: CardComponent = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md",
        className,
      )}
    >
      {children}
    </div>
  );
};

Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;
