//react imports
import React, { useEffect, useState } from "react";
//material imports
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
//component imports
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { useTheme } from "../context/ThemeContext";
const Exercises = ({ exercises, setExercises, bodyPart }) => {
  //exercise is in Home parent, got to searchExercise where got updated
  //then this update one prop is passed to Exercises component in Home parent
  //console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage; //1*6==6
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage; //6-6==0
  //curr exercises from page 0 to 6
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []; // empty array
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]); 
  //every time bodyPart changes, useEffect will re-render and exercises get's updated
  // Theme mode from custom hook
  const { themeMode } = useTheme();
  const isDarkTheme = themeMode === "dark";
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} /> //uses this exercise card to render the exercise
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            defaultPage={1}
            size="large"
            page={currentPage}
            //onChange={(e) => paginate(e, value)}
            onChange={paginate}
            sx={{
              "& .MuiPaginationItem-root": {
                color: isDarkTheme ? "white" : "black", //text color
              },
              "& .MuiPaginationItem-ellipsis": {
                color: isDarkTheme ? "white" : "black", //ellipsis color
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                backgroundColor: isDarkTheme ? "#007bff" : "#e0e0e0", //page color
                color: isDarkTheme ? "white" : "black",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: isDarkTheme ? "#0056b3" : "#f5f5f5", //hover color
              },
            }}
          />
        )}
      </Stack>
    </Box>
  );
};
export default Exercises;