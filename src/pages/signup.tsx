import type { NextPage } from "next";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Head from "../layouts/Head";

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Signup: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = useCallback(async (data) => {
    console.log(data);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_HOST}/users`,
      {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    if (!response.ok) {
      throw new Error();
    }
    const json = await response.json();
    console.log(json);
  }, []);

  console.log(watch("name"));

  return (
    <>
      <Head title="Sign up" />
      <h1>Sign up</h1>
      <form className="mx-auto max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name", { required: true })} />
        {errors.name && "Name is required"}
        <label className="pt-4">Email</label>
        <input {...register("email", { required: true })} />
        {errors.email && "Email is required"}
        <label className="pt-4">Password</label>
        <input {...register("password", { required: true, minLength: 6 })} />
        {errors.password && "Password is required"}
        <label className="pt-4">Confirmation</label>
        <input
          {...register("passwordConfirmation", {
            required: true,
            minLength: 6,
          })}
        />
        {errors.passwordConfirmation && "Confirmation is required"}
        <div className="pt-4">
          <input
            className="bg-blue-500 hover:bg-blue-600 rounded text-white px-4 py-2"
            type="submit"
            value="Create my account"
          />
        </div>
      </form>
    </>
  );
};

export default Signup;
