import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

function Category() {
  const { query } = useRouter();
  const { Category } = query;
  return (
    <>
      <Head>
        <title>{Category}</title>
        <meta name="description" content={`${Category} Category`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col justify-between">
        <Navbar className="fixed" />

        <Footer />
      </main>
    </>
  );
}

export default Category;
