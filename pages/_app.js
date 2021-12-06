import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between p-4 font-serif shadow">
        <h1 className=" text-2xl sm:text-3xl font-bold text-">
          <Link href="/">Favian Audieri</Link>
        </h1>
        <ul className="flex flex-col sm:flex-row  border-l-2 sm:border-none pl-2 sm:pl-0">
          <li className="p-2 text-base sm:text-lg font-semibold">
            {" "}
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="p-2 text-base sm:text-lg font-semibold">
            {" "}
            <Link href="/about">About</Link>
          </li>
          <li className="p-2 text-base sm:text-lg font-semibold">
            {" "}
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}

export default MyApp;
