import { useEffect, useState } from "react";

export const ToggleButton = () =>  {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      role="switch"
      aria-checked={dark}
      onClick={() => setDark(!dark)}
      className={`
        relative inline-flex h-8 w-16 items-center rounded-full
        transition-colors duration-300 focus:outline-none
        focus:ring-2 focus:ring-[--color-accent-blue] focus:ring-offset-2
        ${dark ? "bg-[#193656]" : "bg-[#d4e8ff]"}
      `}
    >
      <span
        className={`
          inline-block h-6 w-6 transform rounded-full transition-transform duration-300
          shadow
          ${dark
            ? "translate-x-9 bg-[#0d1117]"           
            : "translate-x-1 bg-[#f1f4f9]"}           
        `}
      />
    </button>
  );
}