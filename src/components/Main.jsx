import { useParams } from "react-router-dom";

import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Step4 from "../steps/Step4";
import ErrorPage from "../ErrorPage";

function Main() {
  const { step } = useParams();
  const isNotFirstStep = step !== "step1";
  let nextStep;
  let prevStep;
  if (step === "step1") {
    nextStep = "/step2";
  } else if (step === "step2") {
    nextStep = "/step3";
    prevStep = "/step1";
  } else if (step === "step3") {
    nextStep = "/step4";
    prevStep = "/step2";
  } else if (step === "step4") {
    prevStep = "/step3";
  } else {
    return (
        <ErrorPage />
    )
  }
  return (
    <>
      {step === "step2" ? (
        <Step2
          isNotFirstStep={isNotFirstStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      ) : step === "step3" ? (
        <Step3
          isNotFirstStep={isNotFirstStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      ) : step === "step4" ? (
        <Step4
          isNotFirstStep={isNotFirstStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      ) : (
        <Step1 isNotFirstStep={isNotFirstStep} nextStep={nextStep} />
      )}
    </>
  );
}

export default Main;
