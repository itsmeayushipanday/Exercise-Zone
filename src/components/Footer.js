import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { useTheme } from "../context/ThemeContext"; // Import useTheme hook
import { useInView } from "react-intersection-observer"; // Import Intersection Observer hook

const Footer = () => {
  const { theme } = useTheme(); // Get current theme from context

  // Intersection Observer to detect visibility
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // 10% of the component is visible
  });

  return (
    <Box
      ref={ref}
      mt="80px"
      sx={{
        bgcolor: theme === "light" ? "#fff" : "#333", // Background color based on theme
        color: theme === "light" ? "#000" : "#fff", // Text color based on theme
      }}
      className={inView ? "animate__animated animate__zoomIn" : ""}
    >
      <Stack
        gap="40px"
        sx={{
          alignItems: "center",
        }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img
          className={inView ? "ml-2 mt-2 w-16 h-18 animate__animated animate__zoomIn" : ""}
          src={Logo}
          alt="Logo"
          style={{ borderRadius: "50%" }}
        />
      </Stack>
      <Typography
        variant="h5"
        sx={{
          fontSize: { lg: "28px", xs: "20px" },
          mt: "41px",
          textAlign: "center",
          pb: "40px",
          color: theme === "light" ? "#000" : "#fff", // Text color for light and dark modes
        }}
        className={inView ? "animate__animated animate__zoomIn" : ""}
      >
        Made with 🩷 by Ayushi Panday
      </Typography>
    </Box>
  );
};

export default Footer;
