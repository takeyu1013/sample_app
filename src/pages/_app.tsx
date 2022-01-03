import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import Footer from "../layouts/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="pb-2">
        <header className="bg-black flex justify-between items-center px-12 py-2">
          <Link href="#">
            <a className="text-white font-bold text-3xl uppercase">
              Sample App
            </a>
          </Link>
          <nav>
            <ul className="text-gray-300 flex justify-end gap-x-8">
              <li>
                <Link href="/static_pages/home">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/static_pages/help">
                  <a>Help</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Log in</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="px-12">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
