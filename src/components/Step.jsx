import clsx from "clsx";

function Step(props) {
    const isActive = props.step === props.activeStep;
    return (
        <div className="step">
            <div className={clsx("step--number", isActive && "step--number--active")}>
                {props.number}
            </div>
            <div className="step--info">
                <div className="step--name">{props.name}</div>
                <div className="info">{props.info}</div>
            </div>
        </div>
    );
}

export default Step;