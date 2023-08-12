"use client";

import { docNavigation } from "@/constants/doc-navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DocPagination: React.FC = () => {
  const pathname = usePathname();
  let allLinks = docNavigation.flatMap((section) => section.links);
  let linkIndex = allLinks.findIndex((link) => link.href === pathname);
  let previousPage = allLinks[linkIndex - 1];
  let nextPage = allLinks[linkIndex + 1];

  return (
    <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
      {previousPage && (
        <div>
          <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
            Previous
          </dt>
          <dd className="mt-1">
            <Link
              href={previousPage.href}
              className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span aria-hidden="true">&larr;</span> {previousPage.title}
            </Link>
          </dd>
        </div>
      )}
      {nextPage && (
        <div className="ml-auto text-right">
          <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
            Next
          </dt>
          <dd className="mt-1">
            <Link
              href={nextPage.href}
              className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              {nextPage.title} <span aria-hidden="true">&rarr;</span>
            </Link>
          </dd>
        </div>
      )}
    </dl>
  );
};
