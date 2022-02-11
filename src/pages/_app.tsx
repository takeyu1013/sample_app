import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Footer from "../layouts/Footer";
import { NextPage } from "next";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  VFC,
} from "react";
import { destroyCookie } from "nookies";
import { Menu } from "@headlessui/react";

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
  currentUser: CurrentUser;
  setCurrentUser: Dispatch<SetStateAction<CurrentUser>>;
};

const initialContext = {
  currentUser: undefined,
  setCurrentUser: () => undefined,
};

export const Context = createContext<ContextType>(initialContext);

const Account: VFC<ContextType> = ({ currentUser, setCurrentUser }) => {
  const logout = useCallback(() => {
    destroyCookie(null, "token");
    setCurrentUser(undefined);
  }, [setCurrentUser]);

  return currentUser ? (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">Account</Menu.Button>
        </div>

        <Menu.Items className="inline-block py-1 origin-top-right w-24 absolute top-10 right-0 rounded shadow bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
          <div className="py-1">
            <Menu.Item>
              {() => (
                <div className="hover:bg-gray-200 px-4 py-1">
                  <Link href={`/users/${currentUser.id}`}>
                    <a className="block text-black">Profile</a>
                  </Link>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <div className="hover:bg-gray-200 px-4 py-1">
                  <Link href="#">
                    <a href="#" className="block text-black">
                      Settings
                    </a>
                  </Link>
                </div>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {() => (
                <div className="hover:bg-gray-200 px-4 py-1">
                  <button className="block text-black" onClick={logout}>
                    Log out
                  </button>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </>
  ) : (
    <Link href="/login">
      <a>Log in</a>
    </Link>
  );
};

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [flash, setFlash] = useState("");
  const [currentUser, setCurrentUser] = useState<ContextType["currentUser"]>(
    initialContext.currentUser
  );

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
                <Link href="#">
                  <a>Users</a>
                </Link>
              </li>
              <li>
                <Account
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
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
          <Context.Provider value={{ currentUser, setCurrentUser }}>
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
