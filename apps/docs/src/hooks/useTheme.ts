import { $cookie } from "@/plugins/cookie.plugin";
import { Theme, themeAtom } from "@/stores/theme.store";
import { useAtom } from "jotai";

export function useTheme() {
  const [state, setState] = useAtom(themeAtom);

  const setTheme = (theme: Theme) => {
    setState(theme);
    $cookie.set("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return [state, setTheme] as const;
}
