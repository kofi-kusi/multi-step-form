import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Step4() {
    const navigate = useNavigate()

    function handleNext(event) {
      event.preventDefault()
      navigate("/step3")
    }
  
    function handlePrev(event) {
      event.preventDefault()
      navigate("/step3")
    }

  return (
    <form>
      <Header 
        title="Finish up"
        instructions="Double-check everything looks OK before confirming."
      />
      <main>
        <div className="summary">
          <div className="summary--plan">
            <div>
              <h3>Arcade(Yearly)</h3>
              <Link to="/step2" className="change-btn">Change</Link>
            </div>
            <div>
              <h3>$9/yr</h3>
            </div>
          </div>
          <hr />
          <div className="summary--add-ons">
            <div className="add-ons-summary">
              <p>Online service</p>
              <h4>+$10/yr</h4>
            </div>
            <div className="add-ons-summary">
              <p>Larger storage</p>
              <h4>+$20/yr</h4>
            </div>
          </div>
        </div>
        <div className="total">
          <p>Totoal(per monthly)</p>
          <h2>+$12/mo</h2>
        </div>
      </main>
      <div className="steps--navigator">
          <button className="prev-step" onClick={(e) => handlePrev(e)}>Go back</button>
          <button className="next-step" onClick={(e) => handleNext(e)}>Next Step</button>
        </div>
    </form>
  );
}

export default Step4;