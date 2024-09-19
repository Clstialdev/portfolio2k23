/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeaderProps {
  noMobile?: boolean;
}

const Header: NextPage<HeaderProps> = ({ noMobile = false }) => {
  return (
    <>
      {/* Header (Desktop) */}
      <motion.header
        className="fixed top-0 z-[999] hidden h-[100px] w-full items-center justify-between bg-black bg-opacity-50 px-[5%] backdrop-blur-lg sm:flex [&>*]:text-white"
        animate={{
          y: [-100, 0],
          opacity: [0, 1],
          transition: {
            duration: 0.5,
            ease: [0.65, 0, 0, 0.95],
            delay: 2.2,
          },
        }}
      >
        <div className="text-4xl sh:text-3xl">{`{fh}`}</div>
        <div className="flex gap-2 text-xl sh:text-lg">
          <Link href="mailto:contact@fhstudio.dev">contact@fhstudio.dev</Link>
          <p>/</p>
        </div>
      </motion.header>
      {/* Header (Mobile) */}
      {!noMobile && (
        <motion.header
          className="z-[999] mt-16 flex w-screen items-center justify-between px-[9%] sm:hidden"
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            transition: {
              duration: 0.5,
              ease: [0.65, 0, 0, 0.95],
              delay: 2.2,
            },
          }}
        >
          <div className="z-50 rounded-lg border-2 border-white border-opacity-20 bg-black bg-opacity-[0.15] px-[5px] py-2">
            <h1 className="text-2xl text-white">{`{fh}`}</h1>
          </div>

          {/* hamburger menu */}
          <Link href="/">
            <div className="z-50 flex flex-col gap-[5px]">
              {[1, 2, 3].map((key: number) => (
                <div key={key} className="h-[3.35px] w-[28px] bg-white"></div>
              ))}
            </div>
          </Link>
        </motion.header>
      )}
    </>
  );
};

export default Header;
