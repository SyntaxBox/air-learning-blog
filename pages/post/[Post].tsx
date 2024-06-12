import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PostContent from "@/components/PostContent/PostContent";
import PostThumbnail from "@/components/PostThumbnail/PostThumbnail";
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
      <main className="min-h-screen flex flex-col justify-between">
        <Navbar className="sticky" />
        <PostThumbnail
          url="s1.jpg"
          title="Samsung officially unveils this year's S phone series"
          postTime={Date.now()}
        />
        <PostContent />
        <Footer />
      </main>
    </>
  );
}

export default Post;
