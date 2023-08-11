import { CFC } from "@/types/component.interface";
import { classNames } from "@/utils/classname";

export const Prose: CFC<{ className?: string }> = ({ className, children }) => {
  return (
    <div
      className={classNames(
        className,
        "prose prose-slate max-w-none dark:prose-invert dark:text-slate-400",
        // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-semibold lg:prose-headings:scroll-mt-[8.5rem]",
        // lead
        "prose-lead:text-slate-500 dark:prose-lead:text-slate-400",
        // links
        "prose-a:font-semibold dark:prose-a:text-sky-400",
        // link underline
        "prose-a:no-underline prose-a:text-indigo-600 hover:prose-a:text-indigo-700 hover:prose-a:underline",
        // pre
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10",
        // hr
        "dark:prose-hr:border-slate-800",
        // blockquote,
        "prose-p:before:content-none prose-blockquote:not-italic",
      )}
    >
      {children}
    </div>
  );
};
