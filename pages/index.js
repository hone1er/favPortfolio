import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  const creator = ["c", "r", "e", "a", "t", "o", "o", "o", "o", "r"];

  const container = {
    hidden: { rotateX: 0 },
    show: {
      rotateX: 0,
      transition: {
        staggerChildren: 0.125,
      },
    },
  };

  const letter = {
    hidden: { rotateX: 90 },
    show: { rotateX: 0 },
  };

  return (
    <div>
      <Head>
        <title>EBMUD&apos;s Portfolio</title>
        <meta name="description" content="Favian Audieri's art portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-0 font-serif min-h-screen">
        <div className="flex items-center justify-around flex-col-reverse lg:flex-row min-h-screen">
          <motion.div
            className="max-w-screen-md"
            initial={{ scale: 0.5, opacity: 0, y: 450 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: { duration: 2, ease: "easeInOut" },
            }}
          >
            <Image
              className="object-center "
              loader={myLoader}
              src="https://source.unsplash.com/random/425x425"
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </motion.div>
          <div className="max-w-md ">
            {creator && (
              <motion.h1
                className="text-5xl font-semibold whitespace-pre-line"
                initial="hidden"
                whileInView="show"
                variants={container}
              >
                EBMUD is a {"\n"}
                {creator.map((lttr, i) => (
                  <motion.h1 key={i} className="inline-block" variants={letter}>
                    {lttr}
                  </motion.h1>
                ))}
              </motion.h1>
            )}
            <motion.p
              className="text-xl sm:text-2xl mt-8 text-gray-900 font-medium"
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0, transition: { delay: 0.2, duration: 1 } }}
            >
              These are words about the dude that made the stuff you see on this
              website. You either like it or you don&apos;t....like my dick
            </motion.p>
            <motion.p
              className="text-sm sm:text-base mt-4 text-gray-700 font-thin font-sans"
              initial={{ rotateX: 90 }}
              animate={{ rotateX: 0, transition: { delay: 0.2, duration: 1 } }}
            >
              If you have more words and shit they can go here and it&apos;ll be
              cool because people will know things about you. Even though
              realistically they probably won&apos;t even read this far. It
              makes the webpage look a little more filled out.
            </motion.p>
          </div>
        </div>
      </main>
    </div>
  );
}
