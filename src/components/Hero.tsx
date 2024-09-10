/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Header from "./UI/Header";
interface LoadingVideosProps {
  setLoading: any;
  loaded: boolean;
}
const Hero: NextPage<LoadingVideosProps> = ({ setLoading, loaded }) => {
  const [finishedLoading, setFinishedLoading] = useState(0);

  useEffect(() => {
    console.log("logged", finishedLoading);

    if (finishedLoading === 2) {
      setLoading(false);
    }
  }, [finishedLoading, setLoading]);

  const [landingLoop, setLandingLoop] = useState(false);
  const roundText = "ScrollDown * ScrollDown * ScrollDown *";

  const containerVariant: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.25,
        staggerDirection: -1,
        delayChildren: 4,
      },
    },
  };

  const itemVariant: Variants = {
    initial: {
      opacity: 0,
      y: 100,
      transition: {
        ease: [0.65, 0, 0, 0.95],
      },
    },
    animate: loaded
      ? {
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.65, 0, 0, 0.95],
            duration: 0.5,
          },
        }
      : {},
  };

  const mobileBlurVariant: Variants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.65, 0, 0, 0.95],
        delay: 4,
      },
    },
    fast: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0, 0.95],
      },
    },
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const [skillText, setSkillText] = useState([false, false, true]);
  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        const index = skillText.indexOf(true);
        const array = [false, false, false];
        array[(index + 1) % 3] = true;
        setSkillText(array);
      }, 6000);
    }
  }, [skillText, loaded]);
  return (
    <>
      {/* BG Video and Stars (hidden on mobile) */}
      <div className="absolute left-0 right-0 top-[50px] z-0 hidden  h-[calc(100vh-100px)] items-center justify-center saturate-[1.4] md:flex">
        {!landingLoop ? (
          <video
            onCanPlayThrough={() => {
              setFinishedLoading((c) => c + 1);
              console.log("test");
            }}
            autoPlay
            muted
            className="h-full"
            src={"videos/landingshot.mp4"}
            onEnded={() => {
              setLandingLoop(true);
            }}
          >
            your browser does not support the video tag.
          </video>
        ) : (
          <video
            onCanPlayThrough={() => {
              setFinishedLoading((c) => c + 1);
              console.log("test");
            }}
            autoPlay
            muted
            loop
            className="h-full"
            src={"/videos/landingloop.mp4"}
          >
            your browser does not support the video tag.
          </video>
        )}

        {/*3D Stars*/}
        <motion.div
          animate={{
            opacity: [0, 1],
            x: [400, 0],
            rotate: [0, 20],
            transition: { duration: 0.3, delay: 6, ease: [0.65, 0, 0, 0.95] },
          }}
          className="absolute right-[15%] mt-40 hidden h-[250px]  w-[170px] sh:right-[5%] sh:block xxl:right-[2%] xxl:block"
        >
          <motion.div
            animate={{
              y: [-100, 0],
              opacity: [0, 1],
              transition: {
                duration: 0.5,
                ease: [0.65, 0, 0, 0.95],
                delay: 2.2,
              },
            }}
            className="absolute"
          >
            <Image
              src="/threedee/star1.png"
              height={100}
              width={100}
              alt=""
              style={{ scale: "-1" }}
            />
          </motion.div>

          <motion.div
            animate={{
              x: [0, -5, 10, -5, 0],
              y: [0, 20, 15, 0, 20, 0],
              rotateZ: [0, 20, 0],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute mt-16"
          >
            <Image
              src="/threedee/star2.png"
              height={120}
              width={120}
              alt=""
              style={{ scale: "-1" }}
            />
          </motion.div>
          <motion.div
            animate={{
              x: [0, 20, 15, -5, 0],
              y: [0, -5, 10, 0, 20, 0],
              rotateZ: [0, -20, 0],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute mt-36"
          >
            <Image src="/threedee/star3.png" height={90} width={90} alt="" />
          </motion.div>
        </motion.div>

        {/*2D Stars*/}
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [-100, 0],
            transition: { duration: 1, delay: 6, ease: [0.65, 0, 0, 0.95] },
          }}
          className="absolute top-[10%] ml-[200px] h-[250px] w-[170px] xxl:ml-[350px]"
        >
          <motion.div
            className="absolute ml-[100px] mt-[20px]"
            animate={{
              y: [0, 20, 15, -5, 0],
              x: [0, -5, 10, 0, 20, 0],
              rotateZ: [0, -40, 0],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image src="/ornaments/star1.svg" height={30} width={30} alt="" />
          </motion.div>

          <motion.div
            className="absolute mt-16"
            animate={{
              x: [0, 20, 15, -5, 0],
              y: [0, -5, 10, 0, 20, 0],
              rotateZ: [0, -20, 0],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image src="/ornaments/star2.svg" height={60} width={60} alt="" />
          </motion.div>
          <motion.div
            className="absolute -ml-[30px] mt-[130px]"
            animate={{
              x: [0, -5, 10, -5, 0],
              y: [0, 20, 15, 0, 20, 0],
              rotateZ: [0, 20, 0],
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image src="/ornaments/star3.svg" height={35} width={35} alt="" />
          </motion.div>
        </motion.div>
      </div>

      {/* Header (Desktop) */}
      <Header noMobile />

      {/* BG Video MOBILE ONLY */}
      <motion.div className="absolute z-0 h-screen w-full sm:hidden">
        {!landingLoop ? (
          <video
            onCanPlayThrough={() => {
              setFinishedLoading((c) => c + 1);
              console.log("test");
            }}
            autoPlay
            muted
            className="h-full"
            src={"/videos/landingshotmobile.mp4"}
            onEnded={() => {
              setLandingLoop(true);
            }}
          >
            your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute left-0 right-0 top-0 h-[400px]">
            {/* Bubble Image */}
            <motion.div
              variants={mobileBlurVariant}
              initial="initial"
              animate="fast"
              className="absolute right-0 top-0 z-10 h-[20vh] w-[68vw]"
            >
              <Image
                src="/bubbles/cornerbubble.png"
                alt=""
                width={1000}
                height={1000}
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </div>
        )}
        {/* Blurs */}
        <div>
          <motion.div
            variants={mobileBlurVariant}
            initial={{ opacity: 0, y: 500 }}
            animate="animate"
            className="absolute bottom-0 left-0 right-0"
          >
            <Image
              src="/blurs/mobileblurlayer1.png"
              height={1200}
              width={1000}
              alt=""
              unoptimized
            />
          </motion.div>
          <motion.div
            variants={mobileBlurVariant}
            initial={{ opacity: 0, y: 200 }}
            animate="animate"
            className="absolute bottom-0 left-0 right-0"
          >
            <Image
              src="/blurs/mobileblurlayer2.png"
              height={1200}
              width={1000}
              alt=""
              unoptimized
            />
          </motion.div>
          <motion.div
            variants={mobileBlurVariant}
            initial="initial"
            animate="animate"
            className="absolute left-0 top-0 h-[25vh] w-full"
          >
            <Image
              src="/blurs/mobileblurlayer3.png"
              height={400}
              width={400}
              alt=""
              unoptimized
            />
          </motion.div>
        </div>
        {/* Scroll Down Text */}
        <h4 className="-ml-4 mt-[59%] w-fit -rotate-90 text-sm font-medium uppercase text-white text-opacity-25">
          <span className="mr-3 text-white text-opacity-25">{`<-`}</span>
          Scroll Down
        </h4>
      </motion.div>

      {/* Header (Mobile) */}
      <motion.header
        className="mt-16 flex w-screen items-center justify-between px-[9%] sm:hidden"
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
        {/* <div className="z-50 flex flex-col gap-[5px]">
          {[1, 2, 3].map((key: number) => (
            <div key={key} className="h-[3.35px] w-[28px] bg-white"></div>
          ))}
        </div> */}
      </motion.header>

      {/* Hero */}
      <motion.div
        transition={{ staggerChildren: 0.6 }}
        variants={containerVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative z-50 mt-[100px] flex h-[calc(100vh-100px)] w-full flex-col justify-center px-[7%] saturate-[1.4] sm:px-[5%]"
      >
        {/*Hero text*/}
        <motion.div
          transition={{ staggerChildren: 0.6 }}
          variants={containerVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="space-y-2 sm:-mt-[140px] sm:flex sm:flex-col sm:items-center sm:space-y-4 md:block sh:-mt-16"
        >
          <motion.h1
            variants={itemVariant}
            className="text-6xl font-black text-[#D9D5E5] sm:text-center sm:font-bold sm:text-white md:text-left lg:text-6xl sh:text-5xl xxl:text-8xl"
          >
            <span className="absolute -ml-4 -mt-10 opacity-[0.75] sm:opacity-100 xxl:-ml-2">
              <Image src="/ornaments/crown.svg" height={60} width={60} alt="" />
            </span>
            Creative
          </motion.h1>
          <AnimatePresence mode="wait">
            {skillText[0] && (
              <motion.h1
                variants={itemVariant}
                key={"skillText0"}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="hidden text-6xl font-black text-[#D9D5E5] sm:block sm:text-center sm:font-bold sm:text-white md:text-left lg:text-6xl sh:text-5xl xxl:text-8xl"
              >
                Full Stack Dev,
                <span className="pl-2 font-bold sm:text-center md:text-left lg:text-5xl xxl:text-6xl">
                  a
                </span>
              </motion.h1>
            )}
            {skillText[1] && (
              <motion.h1
                variants={itemVariant}
                key={"skillText1"}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="hidden text-6xl font-black text-[#D9D5E5] sm:block sm:text-center sm:font-bold sm:text-white md:text-left lg:text-6xl sh:text-5xl xxl:text-8xl"
              >
                3D Artist,
                <span className="pl-2 font-bold sm:text-center md:text-left lg:text-5xl xxl:text-6xl">
                  a
                </span>
              </motion.h1>
            )}
            {skillText[2] && (
              <motion.h1
                variants={itemVariant}
                key={"skillText2"}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.3,
                  },
                }}
                className="hidden text-6xl font-black text-[#D9D5E5] sm:block sm:text-center sm:font-bold sm:text-white md:text-left lg:text-6xl sh:text-5xl xxl:text-8xl"
              >
                UI/UX Designer,
                <span className="pl-2 font-bold sm:text-center md:text-left lg:text-5xl xxl:text-6xl">
                  a
                </span>
              </motion.h1>
            )}
          </AnimatePresence>
          <motion.h1
            variants={itemVariant}
            className="text-6xl font-black text-[#D9D5E5] sm:hidden sm:text-white"
          >
            Developer,
            <span className="pl-2 text-[40px] font-black text-[#D9D5E5] sm:text-white">
              a
            </span>
          </motion.h1>
          <motion.h1
            variants={itemVariant}
            className="text-[35px] font-black text-[#D9D5E5] sm:text-center sm:font-bold sm:text-white md:text-left lg:text-6xl sh:text-5xl xxl:text-8xl"
          >
            ‘One Man Orchestra’
          </motion.h1>
          <motion.p
            variants={itemVariant}
            className="w-full pt-2 text-[15px] font-semibold text-[#69959F] text-opacity-100 sm:mt-0 sm:w-[50%] sm:text-center sm:font-normal sm:text-white sm:text-opacity-100 sm:text-opacity-60 md:text-left lg:w-[700px] xl:text-xl sh:text-lg xxl:w-[990px]"
          >
            Hi, My name is Fateh. I work with people from all over the world to
            create tailor-made web applications and experiences, focusing on
            usability, performance and user experience.
          </motion.p>
          <motion.p
            variants={itemVariant}
            className="pt-2 text-sm font-semibold text-[#69959F] text-opacity-100 text-opacity-60 sm:pt-0 sm:text-lg sm:font-normal sm:text-white sm:text-opacity-100"
          >{`{Web developer , 3D Artist , UI/UX Designer};`}</motion.p>
        </motion.div>

        {/* Scroll Down Stamp (hidden on mobile) */}
        <motion.div
          variants={itemVariant}
          className="absolute bottom-20 left-[5.9%] hidden sm:left-[40%] sm:block md:left-[5.9%] sh:bottom-10 sh:left-auto sh:right-[5%]"
        >
          <motion.div
            className="absolute h-full w-full hover:cursor-pointer"
            animate={{
              rotate: "360deg",
              transition: { duration: 8, repeat: Infinity },
            }}
            onClick={() => scrollTo("selected-works")}
          >
            {roundText.split("").map((char: string, i: number) => (
              <span
                key={i}
                className="gallient absolute left-[50%] -mt-[25px] origin-[0_80px] text-lg"
                style={{ transform: `rotate(${i * 9.25}deg) ` }}
              >
                {char}
              </span>
            ))}
          </motion.div>
          <Image src="/ornaments/stamp.svg" width={110} height={110} alt="" />
          <div className="absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] translate-x-[-50%] translate-y-[-50%]">
            <Image
              src="/blurs/roundblur2.png"
              alt=""
              unoptimized
              width={1000}
              height={1000}
              className="rotate-12 object-contain"
            />
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[200px] -z-10 h-[800px] w-[800px] translate-x-[-50%] translate-y-[-50%] ">
            <Image
              src="/blurs/blur2.png"
              alt=""
              unoptimized
              width={1000}
              height={1000}
              className="pointer-events-none rotate-12 overflow-hidden object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
