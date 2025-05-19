import { Link } from "react-router-dom";

function StepsNavigator(props) {
  return (
    <div className="steps--navigator">
      <div className="">{props.isNotFirstStep && <Link to={props.prevStep}>Go back</Link> }</div>
      <Link to="/step2">Next Step</Link>
    </div>
  );
}

export default StepsNavigator;
