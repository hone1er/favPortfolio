import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const menu = [
  { title: "Home", path: "/" },
  { title: "Gallery", path: "/gallery" },
  { title: "Contact", path: "/contact" },
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between p-4 font-serif shadow">
        <h1 className=" text-2xl sm:text-3xl font-bold text-gray-700">
          <Link href="/">EBMUD</Link>
        </h1>
        <ul className="flex flex-col sm:flex-row  border-l-2 sm:border-none pl-2 sm:pl-0">
          {menu.map((item, index) => {
            return (
              <li
                key={index}
                className={`p-2 text-base sm:text-lg font-semibold text-gray-500 hover:text-gray-700 ${
                  router.pathname === item.path && "text-gray-700"
                }`}
              >
                {" "}
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
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
