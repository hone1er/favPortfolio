import styles from "../styles/Home.module.css";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import photo from "../images/check.png";
import photo2 from "../images/Cruz-And-Myles.jpg";
export default function Gallery() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const arts = [photo, photo2];

  let images = arts.map((art, idx) => {
    console.log(art.src);
    <Image
      className="object-center "
      loader={myLoader}
      src={art.src}
      width={500}
      height={500}
      alt="check"
      placeholder="blurDataURL"
    />;
  });

  let imgDiv = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {images}
    </div>
  );

  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      <div className="container m-auto w-full font-serif">
        <h1 className="text-center text-8xl font-light mt-16 mb-24">Gallery</h1>

        <h2 className="text-center text-4xl font-light mt-24 mb-12 font-sans">
          Promotional Material
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 shadow">
          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/Roller-Skate-Jam.jpg")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/Joe-Business-Card.jpg")}
              width={700}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
          <Image
            className=" object-contain"
            loader={myLoader}
            src={require("../images/Cruz-And-Myles.jpg")}
            width={500}
            height={500}
            alt="check"
            placeholder="blurDataURL"
          />
          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/Class.jpg")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/Myles-Military.jpg")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/Benal-Buckets.jpg")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>

          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/Waxboy-Prem.jpg")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/Is-It-Add.jpg")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
        </div>
        <h2 className="text-center text-4xl font-light mt-24 mb-12 font-sans">
          Clothing Designs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 shadow">
          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/Backhouse.jpg")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>

          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/Ohmies.jpg")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
        </div>
        <h2 className="text-center text-4xl font-light mt-24 mb-8 font-sans">
          Digital Media
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white p-4 shadow">
          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/oh_yeah.gif")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>

          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/dance.gif")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
          <div className="flex items-center">
            <Image
              className="object-contain"
              loader={myLoader}
              src={require("../images/hone.gif")}
              width={500}
              height={500}
              alt="check"
              placeholder="blurDataURL"
            />
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
