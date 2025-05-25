import Header from "../components/Header";

function Step4() {


    function handleNext(event) {
      event.preventDefault()
      navigate("/step3")
    }
  
    function handlePrev(event) {
      event.preventDefault()
      navigate("/step1")
    }

  return (
    <form>
      <Header 
        title="Finish up"
        instructions="Double-check everything looks OK before confirming."
      />
      <div className="steps--navigator">
          <button className="prev-step" onClick={(e) => handlePrev(e)}>Go back</button>
          <button className="next-step" onClick={(e) => handleNext(e)}>Next Step</button>
        </div>
    </form>
  );
}

export default Step4;