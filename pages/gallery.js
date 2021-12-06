import styles from "../styles/Home.module.css";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import photo from "../images/check.png";
export default function Gallery() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="container m-auto w-full font-serif">
        <h1 className="text-center text-6xl font-light mt-12 mb-8">Gallery</h1>
        <div className="grid grid-cols-3 gap-2">
          <Image
            className="object-center "
            loader={myLoader}
            src="https://source.unsplash.com/random/425x425"
            width={500}
            height={500}
            alt="check"
            placeholder="blurDataURL"
          />
          <Image
            className="object-center "
            loader={myLoader}
            src="https://source.unsplash.com/random/300x300"
            width={500}
            height={500}
            alt="check"
            placeholder="blurDataURL"
          />
          <Image
            className="object-center "
            loader={myLoader}
            src="https://source.unsplash.com/random/250x250"
            width={500}
            height={500}
            alt="check"
            placeholder="blurDataURL"
          />
          <Image
            className="object-center "
            loader={myLoader}
            src="https://source.unsplash.com/random/570x570"
            width={500}
            height={500}
            alt="check"
            placeholder="blurDataURL"
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex flex-row flex-wrap flex-grow items-center justify-center">
          <div className="cursor-pointer m-2 p-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg ">
            <Link href="">
              <Image
                className="object-center  h-auto"
                loader={myLoader}
                src="https://source.unsplash.com/random/400x400"
                width={500}
                height={500}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center pt-4 ">Business Cards</p>
            </Link>
          </div>
          <div className="cursor-pointer m-2 p-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg">
            <Link href="">
              <Image
                className="object-center  h-auto"
                loader={myLoader}
                src="https://source.unsplash.com/random/600x600"
                width={500}
                height={500}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center pt-4 ">Promotional Material</p>
            </Link>
          </div>
          <div className="cursor-pointer m-2 p-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg ">
            <Link href="">
              <Image
                className="object-center  h-auto"
                loader={myLoader}
                src="https://source.unsplash.com/random/500x500"
                width={500}
                height={500}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center pt-4 ">Digital Art</p>
            </Link>
          </div>
          <div className="cursor-pointer m-2 p-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg ">
            <Link href="">
              <Image
                className="object-center  h-auto"
                loader={myLoader}
                src="https://source.unsplash.com/random/550x550"
                width={500}
                height={500}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center pt-4 ">Physical Art</p>
            </Link>
          </div>
          <div className="cursor-pointer m-2 p-6 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-lg ">
            <Link href="">
              <Image
                className="object-center  h-auto"
                loader={myLoader}
                src="https://source.unsplash.com/random/525x525"
                width={500}
                height={500}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center pt-4 ">Photos</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
