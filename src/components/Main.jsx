import { useState } from "react";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Step3 from "../steps/Step3";
import Step4 from "../steps/Step4";
import ErrorPage from "../ErrorPage";

function Main(props) {
  const [timing, setTiming] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0)
  const [formData, setformData] = useState({
    personalInfo: {},
    plan: {},
    addOns: [],
  });

  
  
  const isMontly = timing === true;
  const isYearly = timing !== true;

  return (
    <main>
      {props.step === "step2" ? (
        <Step2
          setTotalPrice={setTotalPrice}
          timing={timing}
          setTiming={setTiming}
          isMontly={isMontly}
          isYearly={isYearly}
          setformData={setformData}
          formData={formData}
        />
      ) : props.step === "step3" ? (
        <Step3
          setTotalPrice={setTotalPrice}
          timing={timing}
          setTiming={setTiming}
          isMontly={isMontly}
          isYearly={isYearly}
          setformData={setformData}
          formData={formData}
        />
      ) : props.step === "step4" ? (
        <Step4
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          timing={timing}
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
