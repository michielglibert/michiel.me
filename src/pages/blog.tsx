import type { NextPage } from "next";
import Head from "next/head";
import AppShell from "../components/common/AppShell";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Michiel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell>Blog</AppShell>
    </>
  );
};

export default Blog;
