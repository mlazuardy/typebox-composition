import { CFC } from "@/types/component.interface";
import { Fence } from "../common/Fence";

interface Props {
  codes: {
    name: string;
    code: string;
    lang: string;
  }[];
}

export const ExampleLayout: CFC<Props> = ({ children, codes }) => {
  const firstCode = codes[0];

  return (
    <>
      <div className="border border-gray-300 rounded-t-md overflow-hidden">
        {children}
        <div className="not-prose grid w-full grid-cols-2 border-t border-gray-300">
          <ul className="flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li>
              <span className="inline-block w-full p-2 px-3 text-gray-800 bg-gray-100 border-r border-gray-300 dark:text-white dark:bg-gray-800 dark:border-gray-600">
                Code
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative example-code">
        <Fence code={firstCode.code} language={firstCode.lang} />
      </div>
    </>
  );
};
