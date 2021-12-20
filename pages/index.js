import Head from "next/head";
import Image from "next/image";

export default function About() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div>
      <Head>
        <title>Fav&apos;s Portfolio</title>
        <meta name="description" content="Favian Audieri's art portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-0 font-serif min-h-screen">
        <div className="flex items-center justify-around flex-col-reverse lg:flex-row min-h-screen">
          <div className="max-w-screen-md">
            <Image
              className="object-center "
              loader={myLoader}
              src="https://source.unsplash.com/random/425x425"
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
          <div className="max-w-md ">
            <h1 className="text-5xl font-semibold">Fav is a creatoooor</h1>
            <p className="text-xl sm:text-2xl mt-8 text-gray-900 font-medium">
              These are words about the dude that made the stuff you see on this
              website. You either like it or you don&apos;t....like my dick
            </p>
            <p className="text-sm sm:text-base mt-4 text-gray-700 font-thin font-sans">
              If you have more words and shit they can go here and it&apos;ll be
              cool because people will know things about you. Even though
              realistically they probably won&apos;t even read this far. It
              makes the webpage look a little more filled out.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
