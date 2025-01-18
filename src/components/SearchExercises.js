import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
import { useInView } from "react-intersection-observer";

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: true });
  const { ref: inputRef, inView: inputInView } = useInView({ triggerOnce: true });
  const { ref: scrollRef, inView: scrollInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartData]);
    };
    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" p="20px" justifyContent="center">
      <Typography
        ref={headingRef}
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          animation: headingInView ? "fadeInDown 1s" : "none",
        }}
        mb="49px"
        textAlign="center"
        className={headingInView ? "animate__animated animate__fadeInDown" : ""}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box
        ref={inputRef}
        position="relative"
        mb="72px"
        className={inputInView ? "animate__animated animate__bounceIn" : ""}
      >
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "50px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn ml-5"
          sx={{
            bgcolor: "#F53173",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        ref={scrollRef}
        sx={{
          position: "relative",
          width: "100%",
          p: "20px",
          animation: scrollInView ? "fadeInUp 1s" : "none",
        }}
        className={scrollInView ? "animate__animated animate__fadeInUp" : ""}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
