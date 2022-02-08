import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Footer from "../layouts/Footer";
import { NextPage } from "next";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { destroyCookie, parseCookies } from "nookies";
import User from "./users/[id]";

type FlashContextType = {
  flash: string;
  setFlash: Dispatch<SetStateAction<string>>;
};

export const FlashContext = createContext<FlashContextType>({
  flash: "",
  setFlash: () => undefined,
});

type CurrentUser = undefined | null | User;

type ContextType = {
  isLoggedIn: boolean;
  currentUser: CurrentUser;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setCurrentUser: Dispatch<SetStateAction<CurrentUser>>;
};

const initialContext = {
  isLoggedIn: false,
  currentUser: undefined,
  setIsLoggedIn: () => undefined,
  setCurrentUser: () => undefined,
};

export const Context = createContext<ContextType>(initialContext);

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [flash, setFlash] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(initialContext.isLoggedIn);
  const [currentUser, setCurrentUser] = useState<ContextType["currentUser"]>(
    initialContext.currentUser
  );
  const handleAuth = () => {
    destroyCookie(null, "token");
    setCurrentUser(undefined);
    setIsLoggedIn(false);
  };

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
                {isLoggedIn ? (
                  <button onClick={handleAuth}>Log out</button>
                ) : (
                  <Link href="/login">
                    <a>Log in</a>
                  </Link>
                )}
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
        <FlashContext.Provider value={{ flash, setFlash }}>
          <Context.Provider
            value={{ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }}
          >
            <Component {...pageProps} />
          </Context.Provider>
        </FlashContext.Provider>
        <div className="pt-11">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
