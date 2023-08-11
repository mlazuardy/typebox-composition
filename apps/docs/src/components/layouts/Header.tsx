import { GithubIcon } from "@/components/ui";
import { classNames } from "@/utils/classname";
import Link from "next/link";
import { MobileNavigation } from "./MobileNavigation";
import { docNavigation } from "@/constants/doc-navigation";
import { Logo, Logomark } from "@/components/common/Logo";
import { ThemeSelector } from "../common/ThemeSelector";

export const Header: React.FC = () => {
  return (
    <header
      className={classNames(
        "sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-gray-900/5 dark:shadow-none sm:px-6 lg:px-8",
        "dark:bg-gray-900 dark:border-b dark:border-gray-800",
      )}
    >
      <div className="mr-6 flex lg:hidden">
        <MobileNavigation navigation={docNavigation} />
      </div>
      <div className="relative flex flex-grow basis-0 items-center">
        <Link href="/" aria-label="Home page">
          <Logomark className="h-9 w-9 lg:hidden" />
          <Logo className="hidden h-9 w-auto fill-gray-700 dark:fill-sky-100 lg:block" />
        </Link>
      </div>
      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">{/* <Search /> */}</div>
      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
        <Link
          href="/docs"
          className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-white"
        >
          Docs
        </Link>
        <ThemeSelector className="relative z-10" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mlazuardy/typebox-composition"
          className="group"
          aria-label="GitHub"
        >
          <GithubIcon className="h-6 w-6 fill-gray-400 group-hover:fill-gray-500 dark:group-hover:fill-gray-300" />
        </a>
      </div>
    </header>
  );
};
