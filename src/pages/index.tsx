/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Hero from "@src/components/Hero";
import SelectedWorks from "@src/components/SelectedWorks";
import About from "@src/components/About";
import Loading from "@src/components/Loading";
import LoadVideos from "@src/components/LoadVideos";
import dynamic from "next/dynamic";
import Contact from "@src/components/Contact";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Hero"), {
  ssr: false,
});

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Fateh Hadjarsi Portfolio</title>
        <meta name="description" content="Fateh Hadjarsi Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="relative min-h-screen w-screen overflow-x-hidden bg-black "
        id="main"
      >
        <AnimatePresence mode="wait">
          {!loaded ? (
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
              exit={{ y: -200, opacity: 0, transition: { duration: 0.3 } }}
              key={"loadingboy"}
            >
              <Loading loading={loading} />
              <div className="absolute opacity-0">
                <DynamicComponentWithNoSSR
                  setLoading={setLoading}
                  loaded={loaded}
                />
              </div>
            </motion.div>
          ) : (
            <>
              <Hero setLoading={setLoading} loaded={loaded} />
              <SelectedWorks />
              <About />
              <Contact />
            </>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Home;
