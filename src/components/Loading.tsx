/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";

interface LoadingProps {
  loading: boolean;
}

const Loading: NextPage<LoadingProps> = ({ loading = true }) => {
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (status < 96 && loading) {
      const random = (Math.random() * 10) % 6;
      setTimeout(() => {
        setStatus((current) => current + 1);
      }, 50 * random);
    } else if (status < 100 && !loading) {
      setTimeout(() => {
        setStatus((current) => current + 1);
      }, 5);
    }
  }, [status, loading]);

  return (
    <div className="absolute z-[999] flex h-screen w-screen flex-col items-center justify-center bg-black">
      {/* Logo */}
      <h3 className="mb-4 text-4xl sm:mb-10 sm:text-5xl">{`{fh}`}</h3>
      <h1 className="gallient text-6xl sm:text-8xl">Fateh Hadjarsi</h1>
      <h4 className="mt-2 font-semibold uppercase">Portfolio</h4>
      <h4 className="absolute mt-72 font-semibold uppercase">{status}%</h4>
    </div>
  );
};

export default Loading;
