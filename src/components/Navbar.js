//react imports
import React from "react";
import { Link } from "react-router-dom";
//material imports
import { Stack } from "@mui/material";
//logo imports
import Logo from "../assets/images/Logo.png";
//component imports
import ThemedComponent from "./ThemedComponent";
import "../App.css";

const Navbar = () => {
  return (
    <Stack
      direction="row" // horizontal
      justifyContent="space-between" // space out the logo and the rest of the navbar
      alignItems="center" // vertically center the content
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        px: "20px", // padding on x-axis
      }}
    >
      {/* logo link */}
      <Link to="/">
        <img
          className="ml-2 mt-2 w-14 animate__animated animate__backInLeft h-16"
          src={Logo}
          alt="Logo"
          style={{ borderRadius: "50%" }}
        />
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
          className="button-87 animate__animated animate__backInLeft"
        >
          Home
        </Link>

        <a
          href="#exercises"
          className="button-87 animate__animated animate__backInLeft"
        >
          Exercises
        </a>
      </Stack>

      {/* Right side of the navbar */}
      <Stack
        direction="row"
        gap="20px"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ ml: "auto" }} // move this section to the right
      >
        <Link
          to="/gemini"
          className="button-77 animate__animated animate__backInRight"
        >
          Get AI Assistant
        </Link>

        <ThemedComponent />
      </Stack>
    </Stack>
  );
};

export default Navbar;
