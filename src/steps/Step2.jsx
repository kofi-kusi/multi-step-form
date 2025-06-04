import Header from "../components/Header";
import { selectPlan } from "../constants";
import { useState } from "react";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";

function Step2({ setformData }) {
  const [timing, setTiming] = useState(true);
  const [selected, setSelected] = useState(1);
  const navigate = useNavigate()

  const isMontly = timing === true;
  const isYearly = timing !== true;

  function handleNext(event) {
    event.preventDefault()

    setformData((prev) => ({
      ...prev,
      plan: selectedPlanDetails,
    }));
    // formElement.reset()

    navigate("/step3")
  }

  function handlePrev(event) {
    event.preventDefault()
    navigate("/step1")
  }

  const selectedPlan = selectPlan.find((plan) => plan.id === selected);

  const selectedPlanDetails = {
    id: selectedPlan?.id,
    title: selectedPlan?.title,
    billingType: timing ? "monthly" : "yearly",
    price: timing ? selectedPlan?.priceMonth : selectedPlan?.priceYear,
    free: timing ? null : selectedPlan?.free,
  };


  function switchTiming() {
    setTiming((prev) => !prev);
  }

  const planElements = selectPlan.map((plan) => {
    const isSelected = plan.id === selected;

    function handleSelect(e, id) {
      e.preventDefault();
      setSelected(id);
    }

    return (
      <div
        className={clsx("plan-card", isSelected && "selected-plan")}
        key={plan.id}
        onClick={(e) => handleSelect(e, plan.id)}
      >
        <div className="plan-icon">
          <img src={plan.icon} alt={plan.title} />
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
    );
  });

  return (
    <form className="plans" onSubmit={handleNext}>
      <Header
        title="Select your plan"
        instructions="You have the option for montly or yearly billing"
      />
        <div className="plan-card--section row">{planElements}</div>
        <div className="plan--timing row">
          <p className={clsx(isMontly && "active-plan")}>Monthly</p>
          <label className="switch" onChange={switchTiming}>
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p className={clsx(isYearly && "active-plan")}>Yearly</p>
        </div>
      <div className="steps--navigator">
        <button className="prev-step" onClick={(e) => handlePrev(e)}>Go back</button>
        <button className="next-step" onClick={(e) => handleNext(e)}>Next Step</button>
      </div>
    </form>
  );
}

export default Step2;