import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroTitle = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography variant="h4" color="#F53173" fontWeight="600" fontSize="26">
        AI-Powered Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Stretch, Strengthen <br />
        And Repeat
      </Typography>
      <Typography fontSize="23px" fontFamily="Alegreya" lineHeight="35px">
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
          }}
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="#F53173"
        sx={{
          opacity: "0.15",
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise Zone
      </Typography>
      <img
        src="https://www.shutterstock.com/image-vector/cartoon-kids-yoga-different-poses-600nw-1147388369.jpg"
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroTitle;
