import { CFC } from "@/types/component.interface";

export const Label: CFC = ({ children }) => {
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900 mb-1">
      {children}
    </label>
  );
};
