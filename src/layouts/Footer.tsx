import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer>
      <small>
        The{" "}
        <Link href="https://github.com/takeyu1013/sample_app">
          <a>sample app</a>
        </Link>{" "}
        by takeyu1013
      </small>
      <nav>
        <ul>
          <li>
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>News</a>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
