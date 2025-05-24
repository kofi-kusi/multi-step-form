import Header from "../components/Header";
import StepsNavigator from "../components/StepsNavigator";
import { useNavigate } from "react-router-dom";


function Step1() {
  // const [profile, setProfile] = useState()
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement)    
    
    // formElement.reset()
    navigate("/step2");
  }
  
  return (
    <>
      <Header
        title="Personal Info"
        instructions="Please provide your name, email address, and phone number."
      />
      <form onSubmit={handleSubmit} method="post">
        <div className="form--input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g.kofi kusi"
            
          />
        </div>

        <div className="form--input">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g kofi.kusi@example.com"
            
          />
        </div>

        <div className="form--input">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" 
          placeholder="e.g. +233 123 456 789"
          
          />
        </div>
        <div className="steps--navigator">

        <button className="next-step">Next Step</button>
        </div>
      </form>
    </>
  );
}

export default Step1;
