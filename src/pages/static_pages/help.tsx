import type { NextPage } from "next";
import Head from "../../layouts/Head";
import Link from "next/link";

const Help: NextPage = () => {
  return (
    <>
      <Head title="Help" />
      <h1>Help</h1>
      <p>
        To get help on this sample app, see the{" "}
        <Link href="https://github.com/takeyu1013/sample_app">
          <a>help page</a>
        </Link>
        .
      </p>
    </>
  );
};

export default Help;
