import React from "react";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";

const Gemini = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Gemini;
