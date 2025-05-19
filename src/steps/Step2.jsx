import Header from "../components/Header";
import StepsNavigator from "../components/StepsNavigator";

function Step2(props) {
  return (
    <>
      <Header 
        title="Select your plan"
        instructions="You have the option for montly or yearly billing"
      />
      <StepsNavigator
        isNotFirstStep={props.isNotFirstStep} 
        nextStep={props.nextStep}
        prevStep={props.prevStep}
      />
    </>
  );
}

export default Step2;
