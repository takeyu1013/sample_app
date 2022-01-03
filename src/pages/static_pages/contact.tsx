import type { NextPage } from "next";
import Link from "next/link";
import Head from "../../layouts/Head";

const About: NextPage = () => {
  return (
    <>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Contact about the sample app at the{" "}
        <Link href="#">
          <a>contact page</a>
        </Link>
        .
      </p>
    </>
  );
};

export default About;
