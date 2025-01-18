import React, { useEffect, useState, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { useTheme } from "../context/ThemeContext";
import "animate.css";

// Custom Hook to Check Visibility
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
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
      let exercisesData = [];
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

  const { themeMode } = useTheme();
  const isDarkTheme = themeMode === "dark";

  // Refs for Animation
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <Box
      id="exercises"
      sx={{ mt: { lg: "109px" } }}
      mt="50px"
      p="20px"
      ref={sectionRef}
      className={isVisible ? "animate__animated animate__fadeIn" : ""}
    >
      <Typography
        variant="h3"
        mb="46px"
        className={isVisible ? "animate__animated animate__fadeInDown" : ""}
        sx={{
          textAlign: "center",
          color: isDarkTheme ? "white" : "black",
        }}
      >
        Showing Results
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
        className={isVisible ? "animate__animated animate__fadeInUp" : ""}
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            defaultPage={1}
            size="large"
            page={currentPage}
            onChange={paginate}
            sx={{
              "& .MuiPaginationItem-root": {
                color: isDarkTheme ? "white" : "black",
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
              "& .MuiPaginationItem-ellipsis": {
                color: isDarkTheme ? "white" : "black",
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                backgroundColor: isDarkTheme ? "#007bff" : "#e0e0e0",
                color: isDarkTheme ? "white" : "black",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: isDarkTheme ? "#0056b3" : "#f5f5f5",
              },
            }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
