import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";

const HeroTitle = () => {
  const { ref: exerciseZoneRef, inView: isExerciseZoneVisible } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography
        variant="h4"
        color="#F53173"
        fontWeight="600"
        fontSize="26"
        sx={{
          animation: "bounce 1s",
        }}
        className="animate__animated animate__bounce"
      >
        AI-Powered Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" }, animation: "pulse 1s" }}
        mb="23px"
        mt="30px"
        className="animate__animated animate__pulse"
      >
        Stretch, Strengthen <br />
        And Repeat
      </Typography>
      <Typography
        fontSize="23px"
        fontFamily="Alegreya"
        lineHeight="35px"
        sx={{
          animation: "fadeIn 1s",
        }}
        className="animate__animated animate__fadeIn"
      >
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "45px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "#F53173",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "white",
            borderRadius: "4px",
            animation: "zoomIn 1s",
          }}
          className="animate__animated animate__zoomIn"
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography
        ref={exerciseZoneRef} // Attach the ref to track visibility
        fontWeight={600}
        color="#F53173"
        sx={{
          opacity: "0.15",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
          animation: isExerciseZoneVisible ? "zoomIn 1s" : "none", // Apply animation only when visible
        }}
        className={
          isExerciseZoneVisible
            ? "animate__animated animate__zoomIn"
            : "" // Conditional class
        }
      >
        Exercise Zone
      </Typography>
      <img
        src="https://www.shutterstock.com/image-vector/cartoon-kids-yoga-different-poses-600nw-1147388369.jpg"
        alt="hero-banner"
        className="hero-banner-img animate__animated animate__bounceIn"
      />
    </Box>
  );
};

export default HeroTitle;
