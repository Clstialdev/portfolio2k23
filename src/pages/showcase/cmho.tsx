import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Header from "@src/components/UI/Header";

const cmho: NextPage = () => {
  return (
    <>
      <Head>
        <title>FH - Cut My Head Off</title>
        <meta name="description" content="Fateh Hadjarsi Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen w-screen flex-col overflow-hidden bg-black">
        <Header />
        <div className="mt-28 px-[5%]">
          <h3 className="text-2xl">02-09</h3>
          <h1 className="gallient my-4 text-8xl">Cut My Head Off</h1>
          <div className="flex justify-between text-xl">
            <p>{`The world reflects it's light on us`}</p>
            <div>
              <p className="text-center text-sm text-white text-opacity-70">
                Tag
              </p>
              <p className="">3D Animation</p>
            </div>
          </div>
          {/* Images */}
          <div className="mt-8 grid grid-cols-1">
            {/* Full Width Image */}
            <div className="relative w-full">
              <Image
                height={4000}
                width={4000}
                className="h-full w-full object-cover"
                src="/showcase/cmho/car.webp"
                alt=""
                unoptimized
              />
            </div>
          </div>

          <h1 className="my-8 text-4xl">Some freeze frames</h1>

          <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-3">
            {/* Grid Image */}
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/cmho/fire.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/cmho/angel.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/cmho/skele.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/cmho/statue.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/cmho/statueclose.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/cmho/wheel.png"
                alt=""
              />
            </div>
          </div>

          <h1 className="my-8 text-4xl">The full animation</h1>

          <video
            autoPlay
            muted
            className="max-h-[calc(100vh-100px)] w-full"
            loop
            src={"/showcase/cmho/CBR3.mp4"}
          >
            your browser does not support the video tag.
          </video>

          <div className="my-12 h-fit w-full">
            <Link href="/#selected-works">
              <h1 className="text-4xl">{`Get back Home ---->`}</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default cmho;
