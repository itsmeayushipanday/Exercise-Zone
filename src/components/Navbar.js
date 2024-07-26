import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
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
          className="text-[#3A1212] border-b-[3px] border-[#1f1672] no-underline"
        >
          Home
        </Link>
        <a
          href="#exercises"
          className="text-[#3A1212] border-b-[3px] border-[#1f1672] no-underline"
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
