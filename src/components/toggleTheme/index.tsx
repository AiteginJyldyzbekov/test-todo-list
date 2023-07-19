import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const currentTheme: string | null = localStorage.getItem("theme");
    if (currentTheme !== null) {
      setTheme(currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <label htmlFor="themeToggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="themeToggle"
            className="sr-only"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <div className="block bg-gray-300 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white dark:bg-gray-800 w-6 h-6 rounded-full transition"></div>
        </div>
        <span className="ml-3">Switcher</span>
      </label>
    </div>
  );
};

export default ThemeToggle;
