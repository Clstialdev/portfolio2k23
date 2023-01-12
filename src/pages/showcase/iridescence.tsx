import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Header from "@src/components/UI/Header";

const Iridescence: NextPage = () => {
  return (
    <>
      <Head>
        <title>FH - Iridescence</title>
        <meta name="description" content="Fateh Hadjarsi Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen w-screen flex-col overflow-hidden bg-black">
        <Header />
        <div className="mt-28 px-[5%]">
          <h3 className="text-2xl">01-09</h3>
          <h1 className="gallient my-4 text-8xl">Iridescence</h1>
          <div className="flex justify-between text-xl">
            <p>{`The world reflects it's light on us`}</p>
            <div>
              <p className="text-center text-sm text-white text-opacity-70">
                Tag
              </p>
              <p className="">3D Art</p>
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
                src="/showcase/iridescent/curtains.png"
                alt=""
                unoptimized
              />
            </div>
          </div>

          <h1 className="my-8 text-4xl">The iridescent Bubble collection</h1>

          <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 xxl:grid-cols-3">
            {/* Grid Image */}
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/iridescent/bubble1.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/iridescent/bubble2.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/iridescent/bubble3.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/iridescent/bubble4.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/iridescent/bubble5.png"
                alt=""
              />
            </div>
            <div className=" relative h-[400px] w-full sm:h-[600px]">
              <Image
                height={1000}
                width={1000}
                className="h-full w-full object-contain"
                src="/showcase/iridescent/bubble6.png"
                alt=""
              />
            </div>
          </div>

          <h1 className="my-8 text-4xl">Falling Stars Infinite Loop</h1>

          <video
            autoPlay
            muted
            className="w-full"
            loop
            src={"/videos/fallingstars.mp4"}
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

export default Iridescence;
