import React from "react";

import "./App.scss";

import Sidebar from "./components/Sidebar";
import WorkExamples from "./components/WorkExamples";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <WorkExamples />
    </div>
  );
}

export default App;
