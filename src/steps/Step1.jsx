import Header from "../components/Header";
import StepsNavigator from "../components/StepsNavigator";

function Step1(props) {

  function handleSubmit(event) {
    event.preventDefault;
    const formElement = event.currentTarget;
    const formData = new FormData(formElement)
    const name = formData.get("name")
    console.log(name)
    formElement.reset()
  }
  console.log(props)
  

  return (
    <>
      <Header
        title="Personal Info"
        instructions="Please provide your name, email address, and phone number."
      />
      <form onSubmit={handleSubmit} action="post">
        <div className="form--input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g.kofi kusi"
            required
          />
        </div>

        <div className="form--input">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g kofi.kusi@example.com"
            required
          />
        </div>

        <div className="form--input">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" id="phone" 
          placeholder="e.g. +233 123 456 789"
          required
          />
        </div>
      </form>
      <div className="steps--navigator">
        <StepsNavigator isNotFirstStep={props.isNotFirstStep}
          nextStep={props.nextStep}
        prevStep={props.prevStep}
        />
      </div>
    </>
  );
}

export default Step1;
