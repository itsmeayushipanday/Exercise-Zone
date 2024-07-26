import React from "react";
import { Box } from "@mui/material";
import HeroTitle from "../components/HeroTitle";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroTitle />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
