import { FormEvent, useState } from "react";
import FirstForm from "./components/FirstForm";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import { useMultiStepForm } from "./hooks/useMultiStepForm";

function App() {
  type FormData = {
    fullName: string;
    email: string;
    schoolName: string;
    class: string;
    motherName: string;
    fatherName: string;
  };

  const INITIAL_DATA: FormData = {
    fullName: "",
    email: "",
    schoolName: "",
    class: "",
    motherName: "",
    fatherName: "",
  };

  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields }; //returns an object with data from the previous form filled, and the current form filled
    });
  }

  const {
    currentStepIndex,
    steps,
    currentStep,
    back,
    next,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <FirstForm {...data} updateFields={updateFields} />,
    <SecondForm {...data} updateFields={updateFields} />,
    <ThirdForm {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        {currentStepIndex + 1} / {steps.length}
      </div>
      {currentStep}
      <section className="flex">
        {!isFirstStep && ( // don't show the previous button on the first form
          <button
            onClick={(e) => {
              e.preventDefault();
              back();
            }}
            disabled={currentStepIndex <= 0}
          >
            Prev
          </button>
        )}
        <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
      </section>
    </form>
  );
}

export default App;
