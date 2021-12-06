import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fav&apos;s Portfolio</title>
        <meta name="description" content="Favian Audieri's art portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-0 font-serif">
        <div className="container w-full flex">
          <div className="grid"></div>
        </div>
      </main>
    </div>
  );
}
