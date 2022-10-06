import type { NextPage } from "next";
import Head from "next/head";
import CountdownUntilPlay from "../components/CountdownUntilPlay";
import DeptCounter from "../components/DeptCounter";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fedder Countdown</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black h-screen w-screen">
        <CountdownUntilPlay />
        <DeptCounter />
      </main>
    </>
  );
};

export default Home;

