import { CFC } from "@/types/component.type";

export const Container: CFC = ({ children }) => {
  return <div className="container px-4 lg:px-6 mx-auto">{children}</div>;
};
