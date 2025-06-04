import { useState } from "react";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Step4 from "../steps/Step4";
import ErrorPage from "../ErrorPage";

function Main(props) {
  const [formData, setformData] = useState({
    personalInfo: {},
    plan: {},
    addOns: [],
  });
  return (
    <main>
      {props.step === "step2" ? (
        <Step2
          setformData={setformData}
          formData={formData}
        />
      ) : props.step === "step3" ? (
        <Step3
          setformData={setformData}
          formData={formData}
        />
      ) : props.step === "step4" ? (
        <Step4
          setformData={setformData}
          formData={formData}
        />
      ) : props.step === "step1" ? (
        <Step1  
          setformData={setformData}
          formData={formData}
        />
      ) : (
        <ErrorPage />
      )}
    </main>
  );
}

export default Main;
