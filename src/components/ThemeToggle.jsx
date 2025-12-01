import React, { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggle() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className="theme-toggle btn"
    >
      {theme === "dark" ? " Light" : " Dark"}
    </button>
  );
}