//react imports
import React from "react";
//image imports
import LightThemeImage from "../assets/moon.png"; // Icon for dark theme (moon)
import DarkThemeImage from "../assets/night-mode.png"; // Icon for light theme (sun)

//useTheme hook created the abstraction
import { useTheme } from "../context/ThemeContext";

const ThemedComponent = () => {
  // Destructuring useTheme custom hook that gives an object with theme and toggleTheme
  const { theme, toggleTheme } = useTheme();

  return (
    // Dynamically setting the background color and text color according to the theme
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Theme toggle button with icons */}
      <button
        onClick={toggleTheme}
        className="animate__animated animate__backInRight relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-300 px-3 py-1 text-xl font-medium text-white backdrop-blur-3xl">
          {/* Show moon icon if the theme is light (indicating dark mode is next), otherwise show sun icon */}
          {theme === "light" ? (
            <img src={LightThemeImage} alt="Light Theme" className="w-6 h-6" />
          ) : (
            <img src={DarkThemeImage} alt="Dark Theme" className="w-6 h-6" />
          )}
        </span>
      </button>
    </div>
  );
};

export default ThemedComponent;
