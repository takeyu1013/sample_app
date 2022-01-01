import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <div>
          <Link href="#">
            <a>Sample App</a>
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="#">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#">
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
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
