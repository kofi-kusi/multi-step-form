import { useParams } from "react-router-dom"

import Step1 from "../steps/Step1"
import Step2 from "../steps/Step2"
import Step3 from "../steps/Step3"
import Step4 from "../steps/Step4"

function Main() {
    const {step} = useParams()
    const isNotFirstStep = step !== "step1"
    return (
        <>
        {
            step === "step2" ? (
                <Step2 isNotFirstStep={isNotFirstStep}/>
            ) : step === "step3" ? (
                <Step3 isNotFirstStep={isNotFirstStep}/>
            ) : step === "step4" ? (
                <Step4 isNotFirstStep={isNotFirstStep}/>
            ) : (
                <Step1 isNotFirstStep={isNotFirstStep}/>
            )
        }
        </>
    )
}

export default Main