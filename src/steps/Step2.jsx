import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { selectPlan } from "../constants";
import { useState } from "react";
import { clsx } from "clsx"

function Step2(props) {
  const [timing, setTiming] = useState(true)
  const [selected, setSelected] = useState(1)

  const navigate = useNavigate()

  const isMontly = timing === true
  const isYearly = timing !== true

  function switchTiming() {
    setTiming(prev => !prev)
  }

  function handleSelect(e, id) {
    e.preventDefault();
    setSelected(id)
  }

  function handleNext(e) {
    e.preventDefault()
    navigate("/step3")
  }

  function handlePrev(e) {
    e.preventDefault()
    navigate("/step1")
  }

  const planElements = selectPlan.map((plan) => {
    const isSelected = plan.id === selected
    return (
      <div className={clsx("plan-card", isSelected && "selected-plan")} key={plan.id} onClick={(e) => handleSelect(e, plan.id)}
      >
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
          <p className={clsx(isMontly && "active-plan")}>Monthly</p>
          <label className="switch" onChange={switchTiming}>
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p className={clsx(isYearly && "active-plan")}>Yearly</p>
        </div>
      </main>
      < div className="steps--navigator">
      <button className="prev-step" onClick={(e)=>handlePrev(e)}>Go back</button>
      <button className="next-step" onClick={(e)=>handleNext(e)}>Next Step</button>
    </div>
    </>
  );
}

export default Step2;
