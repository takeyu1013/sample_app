import type { NextPage } from "next";
import { useCallback, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Head from "../layouts/Head";

export type Inputs = {
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
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <>
      <Head title="Sign up" />
      <h1>Sign up</h1>
      <form className="mx-auto max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name", { required: true })} />
        {errors.name && "Name is required"}
        <label className="pt-4">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email is invaild",
            },
          })}
        />
        {errors.email && errors.email.message}
        <label className="pt-4">Password</label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password is too short(minimum is 6 characters",
            },
          })}
        />
        {errors.password && "Password is required"}
        <label className="pt-4">Confirmation</label>
        <input
          {...register("passwordConfirmation", {
            validate: (value) =>
              value === password.current ||
              "Password confirmation doesn't match Password",
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
