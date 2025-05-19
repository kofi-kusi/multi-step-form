import Step from "./Step";

function Sidebar({ step: activeStep }) {
  return (
    <div className="sidebar">
      <Step step="step1" activeStep={activeStep} number={1} name="STEP 1" info="YOUR INFO" />
      <Step step="step2" activeStep={activeStep} number={2} name="STEP 2" info="SELECT PLAN" />
      <Step step="step3" activeStep={activeStep} number={3} name="STEP 3" info="ADD-ONS" />
      <Step step="step4" activeStep={activeStep} number={4} name="STEP 4" info="SUMMARY" />
    </div>
  );
}

export default Sidebar;