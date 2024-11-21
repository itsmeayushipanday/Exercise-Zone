//react import
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//material ui import
import { Box } from "@mui/material";
//components import
import { fetchData, exerciseOptions, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState({});
  const [targetExercises, setTargetExercises] = useState({});
  const [equipmentExercises, setEquipmentExercises] = useState({});

  const { id } = useParams(); //extracts id

  //2:2:1
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const ExerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(ExerciseDetailData);
      //console.log(exerciseDetail);

      const ExerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=/${ExerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(ExerciseVideoData.contents);
      //console.log(exerciseVideos);

      const TargetExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${ExerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetExercises(TargetExerciseData);
      //console.log(targetExercises);

      const EquipmentExerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${ExerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(EquipmentExerciseData);
      //console.log(EquipmentExerciseData);
    };
    fetchExercisesData();
  }, [id]); //call whenever id changes

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetExercises={targetExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
