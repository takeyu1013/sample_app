import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import Head from "../../layouts/Head";
import logo from "../../../public/nextjs-logotype-light.svg";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head />
        <h1>Sample App</h1>
        <h2>This is the home page for the sample application.</h2>
        <Link href="#">
          <a>Sign up now!</a>
        </Link>
      </div>
      <Image src={logo} alt="Next.js logo" width={200} />
    </>
  );
};

export default Home;
