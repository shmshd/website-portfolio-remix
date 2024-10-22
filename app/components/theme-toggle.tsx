import { FiMoon, FiSun } from "react-icons/fi";
import { Theme, useTheme } from "remix-themes";

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      aria-label="Toggle Theme"
      className="group absolute right-0 mr-2 mt-2 flex size-8 items-center justify-center rounded bg-primary/20 transition-all duration-300 hover:bg-slate-700 hover:text-white focus:outline-none dark:bg-slate-700 dark:hover:bg-sky-300"
      onClick={() => setTheme(theme === Theme.LIGHT ? Theme.LIGHT : Theme.DARK)}
      type="button"
    >
      <FiMoon className="size-5 rotate-0 scale-100 text-sky-600 transition-all group-hover:text-white dark:-rotate-90 dark:scale-0" />
      <FiSun className="absolute size-5 rotate-90 scale-0 text-sky-300 transition-all group-hover:text-slate-700 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
