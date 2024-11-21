//react import
import React, { useState } from "react";
//material ui import
import { Box } from "@mui/material";
//component import
import HeroTitle from "../components/HeroTitle";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all"); //used here both of them bcoz they will
  const [exercises, setExercises] = useState([]); //get rendered on home page itself

  //console.log(bodyPart);

  return (
    <Box>
      <HeroTitle />
      <SearchExercises
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </Box>
  );
};

export default Home;
