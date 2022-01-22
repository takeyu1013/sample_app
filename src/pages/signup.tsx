import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

import Head from "../layouts/Head";

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Signup: NextPage = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name"));

  return (
    <>
      <Head title="Sign up" />
      <h1>Sign up</h1>
      <form className="mx-auto max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} />
        <label className="pt-4">Email</label>
        <input {...register("email")} />
        <label className="pt-4">Password</label>
        <input {...register("password")} />
        <label className="pt-4">Confirmation</label>
        <input {...register("passwordConfirmation")} />
        <div className="pt-4">
          <input
            className="w-full block mx-auto bg-blue-500 hover:bg-blue-600 rounded text-white px-4 py-2"
            type="submit"
            value="Create my account"
          />
        </div>
      </form>
    </>
  );
};

export default Signup;
