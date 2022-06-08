import FormInfo from "./FormInfo";
import FormIntro from "./FormIntro";
import FormSubmit from "./FormSubmit";

const Form = ({ handleBack, handleNext, step, register, errors, isValid }) => {
    return (
        <div className="form">
            <div className="form-container">
                {step === 0 && <FormIntro />}
                {step === 1 && <FormInfo register={register} errors={errors} />}
                {step === 2 && (
                    <FormSubmit register={register} errors={errors} />
                )}
                <div className="button-container">
                    <button disabled={step === 0} onClick={handleBack}>
                        Back
                    </button>
                    <button
                        disabled={!isValid && step !== 0}
                        type={"button"}
                        onClick={handleNext}
                    >
                        {step === 2 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
