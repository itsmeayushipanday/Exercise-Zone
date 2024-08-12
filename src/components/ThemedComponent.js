import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemedComponent = () => {
  //destructing of useTheme custom hook
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-500 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
          {theme} mode
        </span>
      </button>
    </div>
  );
};

export default ThemedComponent;
