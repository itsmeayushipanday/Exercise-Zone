import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import "./index.css";
import Footer from "./components/Footer";
import Gemini from "./components/Gemini";

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
