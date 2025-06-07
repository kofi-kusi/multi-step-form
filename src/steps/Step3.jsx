import Header from "../components/Header";
import { addOns } from "../constants";
import { useState } from "react";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";

function Step3({ setformData, timing, setTotalPrice }) {
  const [selectedAddOn, setSelectedAddOn] = useState([1, 2]);

  const navigate = useNavigate();

  function handleNext(event) {
    event.preventDefault();
    // Map selected add-ons to include the correct price based on timing
    const selectedAddOnsData = addOns
      .filter((addOn) => selectedAddOn.includes(addOn.id))
      .map((addOn) => ({
        ...addOn,
        price: timing ? addOn.monthAmount : addOn.yearAmount,
        priceText: timing ? addOn.priceMonth : addOn.priceYear,
      }));

    // Calculate total price of selected add-ons
    const addOnsTotal = selectedAddOnsData.reduce(
      (sum, addOn) => sum + Number(addOn.price),
      0
    );

    setformData((prev) => ({
      ...prev,
      addOns: selectedAddOnsData,
    }));

    // Add add-ons total to the overall total price
    setTotalPrice((prevTotal) => prevTotal + addOnsTotal);
    navigate("/step4");
  }

  function handlePrev(event) {
    event.preventDefault();
    navigate("/step2");
  }

  function handleSelect(e, id) {
    setSelectedAddOn((prev) => {
      if (prev.includes(id)) {
        return prev.filter((addOn) => addOn !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  const addOnsElements = addOns.map((addOn) => {
    const isSelected = selectedAddOn.includes(addOn.id);
    const price = timing ? addOn.priceMonth : addOn.priceYear;

    return (
      <div
        className={clsx("add-on", isSelected && "selected-plan")}
        key={addOn.id}
      >
        <div className="add-on-info">
          <input
            type="checkbox"
            id={addOn.id}
            checked={isSelected}
            onChange={(e) => handleSelect(e, addOn.id)}
          />
          <label htmlFor={addOn.value}>
            <div className="add-on-text">
              <h3>{addOn.value}</h3>
              <p>{addOn.desc}</p>
            </div>
          </label>
        </div>
        <p className="price">{price}</p>
      </div>
    );
  });
  return (
    <form className="plans" onSubmit={handleNext}>
      <Header
        title="Pick add-ons"
        instructions="Add-ons help enhance your gaming experience."
      />
      {addOnsElements}
      <div className="steps--navigator">
        <button className="prev-step" onClick={(e) => handlePrev(e)}>
          Go back
        </button>
        <button className="next-step" onClick={(e) => handleNext(e)}>
          Next Step
        </button>
      </div>
    </form>
  );
}

export default Step3;
