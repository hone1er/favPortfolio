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
        <div className="grid grid-cols-3 gap-4">
          <Image
            className="object-center object-cover"
            loader={myLoader}
            src={photo}
            alt="check"
            placeholder="blurDataURL"
          />
          <Image
            className="object-center object-cover"
            loader={myLoader}
            src={photo}
            alt="check"
            placeholder="blurDataURL"
          />
          <Image
            className="object-center object-cover"
            loader={myLoader}
            src={photo}
            alt="check"
            placeholder="blurDataURL"
          />
          <Image
            className="object-center object-cover"
            loader={myLoader}
            src={photo}
            alt="check"
            placeholder="blurDataURL"
          />
        </div>
        <div className="flex flex-row flex-wrap flex-grow items-center justify-center">
          <div className="cursor-pointer">
            <Link href="">
              <Image
                className="object-center object-cover h-auto"
                loader={myLoader}
                src={photo}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center">Business Cards</p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="">
              <Image
                className="object-center object-cover h-auto"
                loader={myLoader}
                src={photo}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center">Promotional Material</p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="">
              <Image
                className="object-center object-cover h-auto"
                loader={myLoader}
                src={photo}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center">Digital Art</p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="">
              <Image
                className="object-center object-cover h-auto"
                loader={myLoader}
                src={photo}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center">Physical Art</p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="">
              <Image
                className="object-center object-cover h-auto"
                loader={myLoader}
                src={photo}
                alt="check"
                placeholder="blurDataURL"
              />
            </Link>
            <Link href="">
              <p className="text-center">Photos</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
