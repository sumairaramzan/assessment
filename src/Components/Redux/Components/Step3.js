// Step3.js
import React from "react";
import { useForm } from "react-hook-form";

const Step3 = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitStep3 = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitStep3)}>
      <h2>Step 3</h2>
      <input {...register("age", { required: true })} placeholder="Age" />
      {errors.age && <p>Age is required</p>}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Step3;
