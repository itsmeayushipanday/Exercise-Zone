import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  //destructuring the exerciseDetail--> no need to call exerciseDetail.bodyPart --> can directly call bodyPart
  const { bodyPart, equipment, gifUrl, name, target, instructions } =
    exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="w-96 h-96" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h5">
          Exercises keeps you strong. {name} is one of the best exercise to
          target you {target}. It will help you improve your mood and gain
          energy.
        </Typography>

        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "30px", xs: "20px" } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}

        <Typography variant="h5">
          {instructions &&
            instructions.length > 0 &&
            instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
