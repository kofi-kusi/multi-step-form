import { useState } from "react";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Step4 from "../steps/Step4";
import ErrorPage from "../ErrorPage";

function Main(props) {
  const [storage, setStorage] = useState();
  return (
    <main>
      {props.step === "step2" ? (
        <Step2
          setStorage={setStorage}
          storage={storage}
        />
      ) : props.step === "step3" ? (
        <Step3
          setStorage={setStorage}
          storage={storage}
        />
      ) : props.step === "step4" ? (
        <Step4
          setStorage={setStorage}
          storage={storage}
        />
      ) : props.step === "step1" ? (
        <Step1  
          setStorage={setStorage}
          storage={storage}
        />
      ) : (
        <ErrorPage />
      )}
    </main>
  );
}

export default Main;
