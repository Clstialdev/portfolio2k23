import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Header from "@src/components/UI/Header";
import { DiscIcon, Github, Globe } from "lucide-react";

const crowinsta: NextPage = () => {
  return (
    <>
      <Head>
        <title>FH - CrowInsta</title>
        <meta name="description" content="Fateh Hadjarsi Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen w-screen flex-col overflow-hidden bg-black">
        <Header />
        <div className="my-28 px-[5%]">
          <div className="my-8 h-fit w-full">
            <Link href="/#other-projects">
              <h1 className="text-2xl">{`<---- Return`}</h1>
            </Link>
          </div>
          {/* Title + links */}
          <div className="flex gap-12 ">
            {/* Title */}
            <h1 className="gallient my-4 text-8xl">CrowInsta</h1>
            {/* Links */}
            <div className="mb-6 flex items-center gap-2 self-end">
              <Link
                href={"https://github.com/Clstialdev/Instagram-Image-Scraper"}
                className=" flex gap-2 rounded border-[1px] border-white/20 p-2"
                target="_blank"
              >
                <Github /> Github
              </Link>
            </div>
          </div>
          <div className="flex justify-between text-xl">
            <p className="max-w-[75%]">{`A real-time desktop simulator for car-to-car communication, aiding infrastructure planning for autonomous vehicles, widely utilized by mobile service providers and car manufacturers.`}</p>
            <div>
              <p className="text-center text-sm text-white text-opacity-70">
                Tag
              </p>
              <p className="">JS CLI Development</p>
            </div>
          </div>
          {/* Images */}
          <div className="mt-8 grid grid-cols-1">
            {/* Full Width Image */}
            <div className="relative w-full">
              <Image
                height={1920}
                width={1080}
                className="h-full w-full object-cover"
                src="/showcase/crowinsta/banner.png"
                alt=""
              />
            </div>
          </div>

          {/* Article */}
          <section>
            {/* Overview */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Overview of the project
              </h1>
              <p className="max-w-[1400px]">
                A CLI tool for scraping images from Instagram hashtags or
                accounts, ideal for creating comprehensive image datasets for
                research and analysis.
              </p>
            </div>

            {/* Images */}
            <div className="mt-8 grid grid-cols-1">
              {/* Full Width Image */}
              <div className="relative w-full">
                <Image
                  height={1920}
                  width={1080}
                  className="h-full w-full object-cover"
                  src="/showcase/crowinsta/crowinsta.webp"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default crowinsta;
