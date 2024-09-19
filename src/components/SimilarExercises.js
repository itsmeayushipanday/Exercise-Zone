//react imports
import React from "react";
//material imports
import { Box, Stack, Typography } from "@mui/material";
//components imports
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      {/* Same muscle group exercise */}
      <Typography variant="h4" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetExercises.length ? (
          <HorizontalScrollbar data={targetExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      {/* Same equipment exercise */}
      <Typography variant="h4" mb={5} mt={5} className="font-bold">
        Exercises that target the same equipment group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
