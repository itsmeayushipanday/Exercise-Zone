import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading exercise videos....";

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch <span className="font-bold text-red-600">{name}</span> exercise
        videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          >
            <img
              src={item.video.thumbnails[0].url}
              alt="item.video.title
"
            />
            <Typography variant="h5">
              <span className="font-bold">{item.video.title}</span>
            </Typography>
            <Typography variant="h6">
              <span className="text-red-600 font-bold">Channel Name: </span>
              {item.video.channelName}
            </Typography>
            <Typography variant="h6">
              <span className="text-red-600 font-bold">Number of views: </span>
              {item.video.viewCountText}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
