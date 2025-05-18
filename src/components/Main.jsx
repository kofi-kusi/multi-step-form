import { useParams } from "react-router-dom"

import Step1 from "../steps/Step1"
import Step2 from "../steps/Step2"
import Step3 from "../steps/Step3"
import Step4 from "../steps/Step4"

function Main() {
    const {step} = useParams()
    return (
        <>
        {
            step === "step2" ? (
                <Step2 />
            ) : step === "step3" ? (
                <Step3 />
            ) : step === "step4" ? (
                <Step4 />
            ) : (
                <Step1 />
            )
        }
        </>
    )
}

export default Main