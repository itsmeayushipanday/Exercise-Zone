import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook

const Footer = () => {
  const { theme } = useTheme(); // Get current theme from context

  return (
    <Box
      mt="80px"
      sx={{
        bgcolor: theme === "light" ? "#fff" : "#333", // Background color based on theme
        color: theme === "light" ? "#000" : "#fff", // Text color based on theme
      }}
    >
      <Stack
        className="animate_animated animate__zoomIn"
        gap="40px"
        sx={{ alignItems: "center", animation: "zoomIn 1s" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img
          className="ml-2 mt-2 w-16 animate__animated animate__zoomIn h-18"
          src={Logo}
          alt="Logo"
          style={{ borderRadius: "50%" }}
        />
      </Stack>
      <Typography
        className="animate_animated animate__zoomIn"
        variant="h5"
        sx={{
          fontSize: { lg: "28px", xs: "20px" },
          mt: "41px",
          textAlign: "center",
          pb: "40px",
          color: theme === "light" ? "#000" : "#fff", // Text color for light and dark modes
          animation: "zoomIn 1s",
        }}
      >
        Made with ❤️ by Ayushi Panday
      </Typography>
    </Box>
  );
};

export default Footer;
