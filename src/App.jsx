import { useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const [activeStep, setActiveStep] = useState("step1");
  return (
    <div className="container">
      <div className="container--sidebar">
        <Sidebar activeStep={activeStep} />
      </div>
      <div className="container--main">
        <Main activeStep={activeStep} />
      </div>
    </div>
  );
}

export default App;
