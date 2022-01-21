import type { GetServerSideProps, NextPage } from "next";

import Head from "../../layouts/Head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/users/${id}`
  );
  const user = await res.json();
  return {
    props: { user },
  };
};

type User = {
  id: number;
  email: string;
  name: string;
};

type Props = { user: User };

const User: NextPage<Props> = ({ user }) => {
  return (
    <>
      <div className="pt-14 pb-11">
        <Head />
        <h1 className="text-5xl text-center pb-4 font-bold">{user.name}</h1>
      </div>
    </>
  );
};

export default User;
