
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Step4 from "../steps/Step4";
import ErrorPage from "../ErrorPage";

function Main(props) {

  return (
    <main>
      {props.step === "step2" ? (
        <Step2/>
      ) : props.step === "step3" ? (
        <Step3/>
      ) : props.step === "step4" ? (
        <Step4/>
      ) : props.step === "step1" ? (
        <Step1  />
      ) : (
        <ErrorPage />
      )}
    </main>
  );
}

export default Main;
