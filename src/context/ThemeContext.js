//react imports
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  //children is a prop wrapped btw theme provider
  const [theme, setTheme] = useState("light");

  //to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //to handle DOM updates after react has rendered the component
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
    document.body.style.color = theme === "light" ? "#333" : "#fff";
  }, [theme]);

  //component wrapped btw ThemeContext have the access the use theme and toggleTheme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook to use themeContext which have theme and toggleTheme fn
const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };