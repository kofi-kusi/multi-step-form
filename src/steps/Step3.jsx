import Header from "../components/Header";
import { addOns } from "../constants";
import { useState } from "react";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";

function Step3() {
  const [selected, setSelected] = useState(false);
  const [selectedAddOn, setSelectedAddOn] = useState([]);

  const navigate = useNavigate();

  function handleNext(event) {
    event.preventDefault();
    navigate("/step4");
  }

  function handlePrev(event) {
    event.preventDefault();
    navigate("/step2");
  }


  function handleSelect(e, id) {
    setSelected((prev) => !prev);
    setSelectedAddOn((prev) => {
      if (prev.includes(id)) {
        return prev.filter((addOn) => addOn !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  const selectedAddOnsData = addOns.filter((addOn) =>
    selectedAddOn.includes(addOn.id)
  );
  console.log(selectedAddOnsData, selected);

  const addOnsElements = addOns.map((addOn) => {
    const isSelected = selectedAddOn.includes(addOn.id);
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
        <p className="price">{addOn.priceMonth}</p>
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
        <button className="prev-step" onClick={(e) => handlePrev(e)}>Go back</button>
        <button className="next-step" onClick={(e) => handleNext(e)}>Next Step</button>
      </div>
    </form>
  );
}

export default Step3;