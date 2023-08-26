"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useTheme } from "@/hooks/useTheme";
import { useEffect } from "react";
import { Theme } from "@/stores/theme.store";

interface Props {
  className?: string;
}

export const ThemeSelector: React.FC<Props> = ({ className }) => {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const cookieTheme = localStorage.getItem("theme");
    if (cookieTheme) {
      setTheme(cookieTheme as Theme);
    }
  }, [setTheme]);

  return (
    <div className={className}>
      <button
        className="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-gray-700 dark:ring-inset dark:ring-white/5"
        aria-label={theme}
        type="button"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <SunIcon className="h-4 w-4 fill-sky-400" />
        ) : (
          <MoonIcon className="h-4 w-4 fill-sky-400" />
        )}
      </button>
    </div>
  );
};
