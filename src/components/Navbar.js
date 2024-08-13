import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";
import { useTheme } from "../context/ThemeContext";
import ThemedComponent from "./ThemedComponent";

const Navbar = () => {
  const { theme } = useTheme();
  const linkStyles = {
    light: {
      colorHome: "#272525",
      colorExercises: "#3A1212",
      borderColor: "#1f1672",
    },
    dark: {
      colorHome: "#FFFFFF",
      colorExercises: "#CCCCCC",
      borderColor: "#ffffff",
    },
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      className="gap-[40px] sm:gap-[123px] mt-[20px] sm:mt-[32px] px-[20px]"
    >
      <Link to="/">
        <img className="ml-2 mt-2" src={Logo} alt="Logo" />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          className={`border-b-[3px] no-underline`}
          style={{
            color: linkStyles[theme].colorHome,
            borderColor: linkStyles[theme].borderColor,
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="no-underline"
          style={{
            color: linkStyles[theme].colorExercises,
            borderBottom: `3px solid ${linkStyles[theme].borderColor}`,
          }}
        >
          Exercises
        </a>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg" />
          <div className="px-8 py-2  bg-gray-500 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            <Link to="/gemini">Get AI Assistant</Link>
          </div>
        </button>
        <ThemedComponent />
      </Stack>
    </Stack>
  );
};

export default Navbar;
