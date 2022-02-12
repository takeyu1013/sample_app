import { setCookie } from "nookies";

export type Inputs = {
  email: string;
  password: string;
};

export const login = async (data: Inputs) => {
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
  const { id, name, token }: { id: string; name: string; token: string } =
    await response.json();
  setCookie(null, "token", token);
  return { id, name };
};
