// Step1.js
import React from "react";
import { useForm } from "react-hook-form";

const Step1 = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitStep1 = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitStep1)}>
      <h2>Step 1</h2>
      <input {...register("name", { required: true })} placeholder="Name" />
      {errors.name && <p>Name is required</p>}
      <input type="submit" value="Next" />
    </form>
  );
};

export default Step1;
