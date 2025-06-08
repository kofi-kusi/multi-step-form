import { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import thankYou from "../assets/images/icon-thank-you.svg";

function Step4({ formData, timing, totalPrice, setTotalPrice }) { 
    const navigate = useNavigate()
    const [isConfirmed, setIsConfirmed] = useState(false)

    function handleNext(event) {
      event.preventDefault()
      setIsConfirmed(prev => !prev)
    }
  
    function handlePrev(event) {
      event.preventDefault()
      setTotalPrice(0);
      navigate("/step3")
    }

    console.log(formData)

    // Calculate total price based on plan and add-ons
    // const totalPrice = formData.plan.price + formData.addOns.reduce((acc, addOn) => acc + timing ? addOn.monthAmount : addOn.yearAmount, 0);

    const addOnsElements = formData.addOns.map((addOn) => {
      return (
        <div className="add-ons-summary" key={addOn.id}>
          <p>{addOn.value}</p>
          <h4>{addOn.priceText}</h4>
        </div>
      );
    }
    );

    function handleClick() {
      setTotalPrice(0);
      
    }

  return (
    <form>
      { isConfirmed ? 
      <div className="thankYou">
        <div>
          <div className="thank-you-img">
            <img src={thankYou} alt="thank you imgage" />
          </div>
          <div className="thank-you-text">
            <h1>Thank you!</h1>
            <p>Thanks for confirming your subscription! We hompe you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
          </div>
        </div>
        
      </div> : <>
      <Header 
        title="Finish up"
        instructions="Double-check everything looks OK before confirming."
      />
      <main>
        <div className="summary">
          <div className="summary--plan">
            <div>
              <h3>{formData.plan.title + " "}
                (
                {formData.plan.billingType.slice(0, 1).toUpperCase() + formData.plan.billingType.slice(1)}
                )</h3>
              <Link to="/step2" className="change-btn" onClick={handleClick}>Change</Link>
            </div>
            <div>
              <h3>{formData.plan.priceText}</h3>
            </div>
          </div>
          <hr />
          <div className="summary--add-ons">
            {addOnsElements}
          </div>
        </div>
        
          {
          timing ?
              
              <div className="total">
              <p>Total(per month)</p>
              <h3>${ totalPrice}/mo</h3>
              </div>
            : <div className="total">
              <p>Total(per year)</p>
              <h3>${ totalPrice }/yr</h3>
              </div>
          }
          
      </main>
      <div className="steps--navigator">
          <button className="prev-step" onClick={(e) => handlePrev(e)}>Go back</button>
          <button className="next-step" onClick={(e) => handleNext(e)}>Confirm</button>
        </div>
        </>}
    </form>
  );
}

export default Step4;