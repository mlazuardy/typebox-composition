"use client";
import { INavigation } from "@/types/navigation.interface";
import { classNames } from "@/utils/classname";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  navigation: INavigation[];
  className?: string;
}

export const Navigation: React.FC<Props> = ({ className, navigation }) => {
  const pathname = usePathname();

  return (
    <nav className={classNames("text-base lg:text-sm", className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-gray-900 dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-gray-100 dark:border-gray-800 lg:mt-4 lg:space-y-4 lg:border-gray-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={classNames(
                      "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-trangray-y-1/2 before:rounded-full",
                      link.href === pathname
                        ? "font-semibold text-sky-500 before:bg-sky-500"
                        : "text-gray-500 before:hidden before:bg-gray-300 hover:text-gray-600 hover:before:block dark:text-gray-400 dark:before:bg-gray-700 dark:hover:text-gray-300",
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};
