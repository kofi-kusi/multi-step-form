import { useNavigate } from "react-router-dom";

function StepsNavigator(props) {
  const navigate = useNavigate();
  function handleNext(event) {
    event.preventDefault();
    navigate(props.nextStep);
  }
  function handlePrev(event) {
    event.preventDefault();
    navigate(props.prevStep);
  }

  return (
    < div className="steps--navigator">
      {props.isNotFirstStep && <button className="prev-step" onClick={(e)=>handlePrev(e)}>Go back</button>}
      <button className="next-step" onClick={(e)=>handleNext(e)}>Next Step</button>
    </div>
  );
}

export default StepsNavigator;
