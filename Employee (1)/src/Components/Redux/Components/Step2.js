// Step2.js
import React from "react";
import { useForm } from "react-hook-form";

const Step2 = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitStep2 = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitStep2)}>
      <h2>Step 2</h2>
      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <p>Email is required</p>}
      <input type="submit" value="Next" />
    </form>
  );
};

export default Step2;
