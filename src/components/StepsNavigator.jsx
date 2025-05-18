import { Link } from "react-router-dom";

function StepsNavigator(props) {
  return (
    <div className="steps--navigator">
      <div className="">{props.isNotFirstStep && <button>Go back</button>}</div>
      <Link to="/step2">Next Step</Link>
    </div>
  );
}

export default StepsNavigator;
