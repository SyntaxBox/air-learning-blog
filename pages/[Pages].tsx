import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function Pages() {
  const { query } = useRouter();
  const { Pages } = query;
  return (
    <>
      <Head>
        <title>{Pages}</title>
        <meta name="description" content={`${Pages} Page`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center w-screen h-screen flex-col">
        <p className="font-bold text-3xl">{Pages} Page</p>
        <p>Add any content You want here</p>
      </main>
    </>
  );
}

export default Pages;
