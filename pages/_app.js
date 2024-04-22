import styles from '../styles/Home.module.css';
import '../styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
const menu = [
  { title: 'Home', path: '/' },
  { title: 'Gallery', path: '/gallery' },
  { title: 'Contact', path: '/contact' },
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <div className='flex w-full flex-row items-center justify-between p-4 font-serif shadow'>
        <h1 className=' text-2xl font-bold text-gray-700 sm:text-3xl'>
          <Link href='/'>EBMUD</Link>
        </h1>
        <ul className='flex flex-col border-l-2  pl-2 sm:flex-row sm:border-none sm:pl-0'>
          {menu.map((item) => {
            return (
              <li
                key={item.title}
                className={`p-2 text-base font-semibold text-gray-500 hover:text-gray-700 sm:text-lg ${
                  router.pathname === item.path && 'text-gray-700'
                }`}
              >
                {' '}
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}

export default MyApp;
