//react imports
import React, { useState, useEffect } from "react";
//material imports
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
//component imports
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      //console.log(bodyPartData); fetched all body parts on rendering
      setBodyParts(["all", ...bodyPartData]); //a list of all body parts
    };
    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      //method type, required parameters to make the API call work properly.
      //console.log(exerciseData);
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      //console.log(searchedExercises);
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" p="20px" justifyContent="center">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          animation: "fadeInDown 1s",
        }}
        mb="49px"
        textAlign="center"
        className="animate__animated animate__fadeInDown"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box
        position="relative"
        mb="72px"
        className="animate__animated animate__bounceIn"
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
        sx={{ position: "relative", width: "100%", p: "20px" }}
        className="animate__animated animate__fadeInUp"
      >
        <HorizontalScrollbar
          data={bodyParts} //array of all body parts name
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts //bool flag indicating body parts or exercise
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
