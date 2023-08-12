import { CFC } from "@/types/component.interface";
import { Fence } from "../common/Fence";

interface Code {
  name: string;
  code: string;
  lang: string;
}

interface Props {
  codes: Code | Code[];
}

export const ExampleLayout: CFC<Props> = ({ children, codes }) => {
  const firstCode = Array.isArray(codes) ? codes[0] : codes;

  return (
    <>
      <div className="border border-gray-300 dark:border-gray-700 rounded-t-md overflow-hidden">
        <div className="py-4 lg:py-8 not-prose">
          <div className="container px-4 lg:px-6 mx-auto">{children}</div>
        </div>
        <div className="not-prose grid w-full grid-cols-2 border-t border-gray-300 dark:border-gray-700">
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
