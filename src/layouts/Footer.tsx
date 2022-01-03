import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="flex justify-between border-t-2 border-zinc-200 border-solid pt-1">
      <small className="text-zinc-500">
        The{" "}
        <Link href="https://github.com/takeyu1013/sample_app">
          <a className="text-zinc-600 hover:text-zinc-800">sample app</a>
        </Link>{" "}
        by takeyu1013
      </small>
      <nav>
        <ul className="flex justify-end gap-x-4">
          <li>
            <Link href="/static_pages/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/static_pages/contact">
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
