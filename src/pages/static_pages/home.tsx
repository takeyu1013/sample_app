import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import Head from "../../layouts/Head";
import logo from "../../../public/nextjs-logotype-light.svg";

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-gray-200 pt-14 pb-12">
        <Head />
        <h1 className="text-5xl text-center pb-4 font-bold">
          Welcome to the Sample App
        </h1>
        <h2 className="text-xl text-center text-gray-600 pb-4">
          This is the home page for the sample application.
        </h2>
        <button className="block mx-auto bg-blue-500 hover:bg-blue-600 rounded text-white px-4 py-2">
          Sign up now!
        </button>
      </div>
      <Image src={logo} alt="Next.js logo" width={200} />
    </>
  );
};

export default Home;
