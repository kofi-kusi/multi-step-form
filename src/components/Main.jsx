
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Step4 from "../steps/Step4";
import ErrorPage from "../ErrorPage";

function Main(props) {
  const isNotFirstStep = props.step !== "step1";

  let nextStep;
  let prevStep;
  if (props.step === "step1") {
    nextStep = "/step2";
  } else if (props.step === "step2") {
    nextStep = "/step3";
    prevStep = "/step1";
  } else if (props.step === "step3") {
    nextStep = "/step4";
    prevStep = "/step2";
  } else if (props.step === "step4") {
    prevStep = "/step3";
  } else {
    return (
        <ErrorPage />
    )
  }
  return (
    <main>
      {props.step === "step2" ? (
        <Step2
          isNotFirstStep={isNotFirstStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      ) : props.step === "step3" ? (
        <Step3
          isNotFirstStep={isNotFirstStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      ) : props.step === "step4" ? (
        <Step4
          isNotFirstStep={isNotFirstStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      ) : props.step === "step1" ? (
        <Step1 isNotFirstStep={isNotFirstStep} nextStep={nextStep} />
      ) : (
        <ErrorPage />
      )}
    </main>
  );
}

export default Main;
