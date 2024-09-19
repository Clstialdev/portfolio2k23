/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const Contact: NextPage = () => {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const underscoreAnimationControl = useAnimation();

  const underscoreAnimationVariant: any = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: {
        duration: 0.7,
      },
    },
    end: {
      width: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: contactRef });
  const y = useTransform(scrollYProgress, [0, 1], ["-300vh", "0%"]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-[5%] ">
      <motion.div
        style={{ y }}
        className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-[5%]"
      >
        <p className=" mb-8 text-[10px] uppercase md:mb-0 md:text-xs">
          Ready for your next project?
        </p>
        <motion.div
          onHoverStart={() => {
            if (!isAnimationPlaying) {
              underscoreAnimationControl.start(
                underscoreAnimationVariant.animate
              );
            }
          }}
          onHoverEnd={() => {
            underscoreAnimationControl.start(underscoreAnimationVariant.end);
          }}
        >
          <Link href="mailto:fateh.hadjarsi@gmail.com">
            <h1 className="gallient my-12 text-6xl lg:text-[300px]">{`Let's Talk`}</h1>
          </Link>
          <motion.div
            animate={underscoreAnimationControl}
            onAnimationComplete={() => {
              setIsAnimationPlaying(false);
            }}
            className="-mt-24 h-[2px] w-[0] bg-white"
          ></motion.div>
        </motion.div>

        <div className="absolute bottom-0 mb-12 flex h-[100px] w-full flex-col items-center justify-center gap-4 px-[5%] md:mb-0 md:flex-row md:justify-between md:gap-0">
          <p>© 2023</p>
          <Link
            href="https://www.linkedin.com/in/fateh-h-227098245/"
            target="_blank"
          >
            <div className="h-fit w-fit rounded border-[1px] border-white bg-black px-4 py-2 duration-150 hover:cursor-pointer hover:bg-white hover:text-black">
              LinkedIn
            </div>
          </Link>
          <p
            className="uppercase hover:cursor-pointer"
            onClick={() => scrollTop()}
          >
            BACK TO TOP ^
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
