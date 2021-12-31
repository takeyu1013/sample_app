import NextHead from "next/head";
import { VFC } from "react";
import { fullTitle } from "../utils/full_title";

type Props = {
  title?: string;
};

const Head: VFC<Props> = ({ title }) => {
  return (
    <NextHead>
      <title>{fullTitle(title)}</title>
    </NextHead>
  );
};

export default Head;
