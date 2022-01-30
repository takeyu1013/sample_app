import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Footer from "../layouts/Footer";
import { NextPage } from "next";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export const flashContext = createContext(
  {} as {
    flash: string;
    setFlash: Dispatch<SetStateAction<string>>;
  }
);

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [flash, setFlash] = useState("");

  return (
    <>
      <div className="pb-2">
        <header className="bg-black flex justify-between items-center px-12 py-2">
          <Link href="/">
            <a className="text-white font-bold text-3xl uppercase">
              Sample App
            </a>
          </Link>
          <nav>
            <ul className="text-gray-300 flex justify-end gap-x-8">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/help">
                  <a>Help</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Log in</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      {flash && (
        <div className="px-12 pb-4">
          <div className="bg-green-100 rounded p-4 text-green-700">{flash}</div>
        </div>
      )}
      <div className="px-12">
        <flashContext.Provider value={{ flash, setFlash }}>
          <Component {...pageProps} />
        </flashContext.Provider>
        <div className="pt-11">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
