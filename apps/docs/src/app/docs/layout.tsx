import { Navigation } from "@/components/layouts/Navigation";
import { docNavigation } from "@/constants/doc-navigation";
import { Prose } from "./Prose";
import { DocPagination } from "./DocPagination";
import { TableOfContents } from "./TableOfContents";

export default function Layout({ children }) {
  return (
    <>
      <div className="hidden lg:relative lg:block lg:flex-none">
        <div className="absolute inset-y-0 right-0 w-[50vw] bg-gray-50 dark:hidden" />
        <div className="absolute bottom-0 right-0 top-16 hidden h-12 w-px bg-gradient-to-t from-gray-800 dark:block" />
        <div className="absolute bottom-0 right-0 top-28 hidden w-px bg-gray-800 dark:block" />
        <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] w-64 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16">
          <Navigation navigation={docNavigation} />
        </div>
      </div>

      <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16">
        <article>
          <Prose>{children}</Prose>
        </article>
        <DocPagination />
      </div>

      <TableOfContents />
    </>
  );
}
