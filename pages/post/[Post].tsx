import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function Post() {
  const { query } = useRouter();
  const { Post } = query;
  return (
    <>
      <Head>
        <title>{Post}</title>
        <meta name="description" content={`${Post} Post`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center w-screen h-screen flex-col">
        <p className="font-bold text-3xl">{Post} Post</p>
        <p>Add any content You want here</p>
      </main>
    </>
  );
}

export default Post;
