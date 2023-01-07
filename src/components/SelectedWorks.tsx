/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

const SelectedWorks: NextPage = () => {
  return (
    <>
      <div className="-mt-10 flex min-h-screen w-screen flex-col px-[5%] sm:pt-28">
        <h1 className="text-4xl">Selected Works</h1>
        <div className="mt-12 grid h-full w-full grid-cols-1 gap-4 xl:grid-cols-2 xxl:grid-cols-3">
          <div className="h-[400px] w-full bg-red-500 sm:h-[600px]"></div>
          <div className="h-[400px] w-full bg-green-500 sm:h-[600px]"></div>
          <div className="h-[400px] w-full bg-emerald-500 sm:h-[600px]"></div>
          <div className="h-[400px] w-full bg-pink-500 sm:h-[600px]"></div>
          <div className="h-[400px] w-full bg-orange-500 sm:h-[600px]"></div>
          <div className="h-[400px] w-full bg-purple-500 sm:h-[600px]"></div>
        </div>
      </div>
    </>
  );
};

export default SelectedWorks;
