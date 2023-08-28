"use client";

import { classNames } from "@/utils/classname";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const TableOfContents: React.FC = () => {
  const [tableOfContents, setTableOfContents] = useState<any[]>([]);
  const pathname = usePathname();

  const isActive = (section: any) => {
    return false;
  };

  useEffect(() => {
    const proseRoot = document.querySelector("#docs-root");
    const contents: any[] = [];

    if (proseRoot?.childNodes?.length) {
      proseRoot.childNodes.forEach((node: any) => {
        if (["H2"].includes(node.nodeName)) {
          contents.push({
            id: node.id,
            title: node.innerText,
          });
        }
      });

      setTableOfContents(contents);
    }
  }, [pathname]);

  return (
    <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" className="w-56">
        {tableOfContents.length > 0 && (
          <>
            <h2
              id="on-this-page-title"
              className="font-display text-sm font-medium text-gray-900 dark:text-white"
            >
              On this page
            </h2>
            <ol role="list" className="mt-4 space-y-3 text-sm">
              {tableOfContents.map((section, index) => (
                <li key={index}>
                  <h3>
                    <a
                      href={`#${section.id}`}
                      className={classNames(
                        isActive(section)
                          ? "text-sky-500"
                          : "font-normal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300",
                      )}
                    >
                      {section.title}
                    </a>
                  </h3>
                  {section.children?.length > 0 && (
                    <ol
                      role="list"
                      className="mt-2 space-y-3 pl-5 text-gray-500 dark:text-gray-400"
                    >
                      {section.children.map((subSection) => (
                        <li key={subSection.id}>
                          <Link
                            href={`#${subSection.id}`}
                            className={
                              isActive(subSection)
                                ? "text-sky-500"
                                : "hover:text-gray-600 dark:hover:text-gray-300"
                            }
                          >
                            {subSection.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </>
        )}
      </nav>
    </div>
  );
};
