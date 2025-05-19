import Header from "../components/Header";
import StepsNavigator from "../components/StepsNavigator";
import { selectPlan } from "../constants";
import { useState } from "react";

function Step2(props) {
  const [timing, setTiming] = useState(true)

  const isMontly = timing === true
  const isYearly = timing !== true

  function switchTiming() {
    setTiming(prev => !prev)
  }

  const planElements = selectPlan.map((plan) => {
    return (
      <div className="plan-card" key={plan.id}>
        <div className="plan-icon">
          <img src={plan.icon} alt={plan.title}/>
        </div>
        <div className="plan-text--section">
          <h3 className="plan-tilte">{plan.title}</h3>
          <div className="plan">
            {isMontly && <p>{plan.priceMonth}</p>}
            {isYearly && (
              <>
              <p>{plan.priceYear}</p>
              <p>{plan.free}</p>
              </>
            )}
          </div>
        </div>
      </div>
    )
  })
  return (
    <>
      <Header 
        title="Select your plan"
        instructions="You have the option for montly or yearly billing"
      />
      <main className="plans">
        <div className="plan-card--section row">
          {planElements}
        </div>
        <div className="plan--timing row">
          <p>Monthly</p>
          <button onClick={switchTiming}></button>
          <p>Yearly</p>
        </div>
      </main>
      <StepsNavigator
        isNotFirstStep={props.isNotFirstStep} 
        nextStep={props.nextStep}
        prevStep={props.prevStep}
      />
    </>
  );
}

export default Step2;
