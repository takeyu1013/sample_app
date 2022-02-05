import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { setCookie } from "nookies";

import Head from "../layouts/Head";

export type Inputs = {
  email: string;
  password: string;
};

const Login: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = useCallback(
    async (data) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_HOST}/login`,
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
      const { id, token }: { id: string; token: string } =
        await response.json();
      setCookie(null, "token", token);
      router.push(`users/${id}`);
    },
    [router]
  );

  return (
    <>
      <Head title="Log in" />
      <h1>Log in</h1>
      <form className="mx-auto max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        <label className="pt-4 pb-1">Email</label>
        <input
          className="px-4 py-2 rounded"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email is invaild",
            },
          })}
        />
        {errors.email && errors.email.message}
        <label className="pt-4 pb-1">Password</label>
        <input
          type="password"
          className="px-4 py-2 rounded"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password is too short(minimum is 6 characters)",
            },
          })}
        />
        {errors.password && errors.password.message}
        <div className="pt-4">
          <input
            className="bg-blue-500 hover:bg-blue-600 rounded text-white px-4 py-2"
            type="submit"
            value="Log in"
          />
          <p>
            New user?{" "}
            <Link href="/signup">
              <a className="text-blue-500 hover:text-blue-600">Sign up now!</a>
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
