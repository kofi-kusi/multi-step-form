import { Link } from "react-router-dom";

function StepsNavigator(props) {
  return (
    <div className="steps--navigator">
      {props.isNotFirstStep && <Link className="prev-step" to={props.prevStep}>Go back</Link> }
      <Link className="next-step" to="/step2">Next Step</Link>
    </div>
  );
}

export default StepsNavigator;
