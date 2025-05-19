import { useParams } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  const { step } = useParams();
  
  return (
    <div className="container">
      <div className="container--sidebar">
        <Sidebar step={step} />
      </div>
      <div className="container--main">
        <Main step={step} />
      </div>
    </div>
  );
}

export default App;
