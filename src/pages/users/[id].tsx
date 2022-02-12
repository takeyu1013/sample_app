import type { GetServerSideProps, NextPage } from "next";
import { createHash } from "crypto";
import Image from "next/image";
import { VFC } from "react";
import { parseCookies } from "nookies";

import Head from "../../layouts/Head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { token } = parseCookies(context);
  const { id } = context.query;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_HOST}/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const user = await response.json();
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

const Gravater: VFC<Props> = ({ user }) => {
  const gravaterId = createHash("md5")
    .update(user.email.toLowerCase())
    .digest("hex");
  const gravaterUrl = `https://secure.gravatar.com/avatar/${gravaterId}`;
  return <Image src={gravaterUrl} alt={user.name} width="100%" height="100%" />;
};

const User: NextPage<Props> = ({ user }) => {
  return (
    <>
      <Head title={user.name} />
      <aside className="grid grid-cols-4">
        <section className="px-2 pt-5">
          <h1 className="text-2xl text-left pt-0 pb-1">
            <span className="pr-2">
              <Gravater user={user} />
            </span>
            <span className="align-top">{user.name}</span>
          </h1>
        </section>
      </aside>
    </>
  );
};

export default User;
