// React imports
import React from "react";
import { Route, Routes } from "react-router-dom";
// Material UI imports
import { Box } from "@mui/material";
//components imports
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Gemini from "./components/Gemini";
import ExerciseDetails from "./pages/ExerciseDetails";
//styling imports
import "./index.css";
import "./App.css";
import "animate.css";

const App = () => {
  return (
    <Box
      width="400px"
      sx={{
        width: { xl: "1488px" },
      }}
      m="auto"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />{" "}
        <Route path="/gemini" element={<Gemini />} />
        {/* to get dynamic routes for id */}
      </Routes>
      <Footer />
    </Box>
  );
};
export default App;
