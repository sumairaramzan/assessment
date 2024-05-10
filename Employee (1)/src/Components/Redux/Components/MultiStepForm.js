// MultiStepForm.js
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({});

  const onSubmitStep1 = (data) => {
    setFormData({ ...formData, ...data });
  };

  const onSubmitStep2 = (data) => {
    setFormData({ ...formData, ...data });
  };

  const onSubmitStep3 = (data) => {
    // Handle submission of the entire form
    console.log("Form data:", { ...formData, ...data });
  };

  return (
    <div>
      <Step1 onSubmit={onSubmitStep1} />
      <Step2 onSubmit={onSubmitStep2} />
      <Step3 onSubmit={onSubmitStep3} />
    </div>
  );
};

export default MultiStepForm;
