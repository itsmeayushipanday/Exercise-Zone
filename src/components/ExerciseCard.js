//home page--> Showing Result section
//exercise cards
import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

//exerice here is basically the fetched body part data (name mostly)
const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#F53173",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            width: { lg: "120px", xs: "100px" }, // Fixed width for consistency
            height: "50px", // Set a fixed height as well
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            width: { lg: "120px", xs: "100px" }, // Fixed width for consistency
            height: "50px", // Set a fixed height as well
          }}
        >
          {exercise.target}
        </Button>
        <Typography
          ml="21px"
          color="#000"
          fontWeight="bold"
          sx={{ fontSize: { lg: "24px", xs: "20px" } }}
          mt="11px"
          pb="10px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
