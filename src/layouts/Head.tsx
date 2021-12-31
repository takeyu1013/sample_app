import NextHead from "next/head";
import { VFC } from "react";

type Props = {
  title: string;
};

const Head: VFC<Props> = ({ title }) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
};

export default Head;
