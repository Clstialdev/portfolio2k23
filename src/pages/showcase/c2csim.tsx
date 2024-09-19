import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Header from "@src/components/UI/Header";
import { DiscIcon, Github, Globe } from "lucide-react";

const c2csim: NextPage = () => {
  return (
    <>
      <Head>
        <title>FH - C2CSim</title>
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
            <h1 className="gallient my-4 text-8xl">C2CSim</h1>
            {/* Links */}
            <div className="mb-6 flex items-center gap-2 self-end">
              <Link
                href={"https://github.com/Clstialdev/c2csim"}
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
              <p className="">C++ App Development</p>
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
                src="/showcase/c2csim/app.png"
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
                C2CSim is a real-time desktop simulator designed for car-to-car
                communication, providing critical insights into infrastructure
                planning for autonomous vehicles. The tool is widely utilized by
                mobile service providers and car manufacturers to evaluate
                communication protocols, traffic scenarios, and network
                performance in various urban and rural environments.
              </p>
            </div>
            {/* Technical Implementation */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Technical Implementation
              </h1>
              <p className="max-w-[1400px]">
                The simulator was developed using C++ and the Qt framework,
                leveraging the SUMO traffic simulation tool and sumolib for
                precise vehicle behavior modeling. The integration of SUMO, a
                tool traditionally supported with Python, required innovative
                adaptations to build a compatible C++ library.
              </p>
              <div className="mb-8 mt-4 flex flex-wrap gap-4">
                <Image
                  src="/icons/c++.png"
                  alt="c++ icon"
                  height={64}
                  width={64}
                  className="object-contain"
                />
                <Image
                  src="/icons/qt.png"
                  alt="qt icon"
                  height={64}
                  width={64}
                  className="object-contain"
                />
                <Image
                  src="/icons/sumo.png"
                  alt="sumo icon"
                  height={64}
                  width={64}
                  className="object-contain"
                />
              </div>
            </div>
            {/* Key Components */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">Key Components</h1>
              {/* BP1 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Custom C++ Library for SUMO Integration:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                Due to the absence of C++ documentation for SUMO, a custom
                library was created to facilitate seamless integration, enabling
                accurate car simulations within the application.
              </p>
              {/* BP2 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Geographic Coordinate Conversion:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                A set of custom mathematical functions was developed to convert
                geographic coordinates to the Lambert93 projection, ensuring
                accurate positioning on OpenStreetMap (OSM).
              </p>
              {/* BP3 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Real-time Communication Protocols:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                The simulator incorporates various communication protocols
                (e.g., Dedicated Short-Range Communications, Cellular V2X) to
                model real-time data exchange between vehicles, assessing
                performance under different traffic conditions.
              </p>
              {/* BP4 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Dynamic Traffic Simulation:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                Vehicles are dynamically added or removed from the simulation
                based on real-world traffic scenarios, with behaviors such as
                lane changes, acceleration, and braking accurately modeled to
                reflect actual driving conditions.
              </p>
              {/* BP5 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Infrastructure Impact Analysis:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                The application includes tools to analyze the impact of
                car-to-car communication on existing infrastructure, providing
                data on network load, latency, and connectivity requirements for
                autonomous vehicle deployment.
              </p>
            </div>

            {/* User Interface and Experience */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                User Interface and Experience
              </h1>
              <p className="max-w-[1400px]">
                The application features a clean, intuitive GUI designed in
                Figma and built using the Qt framework. The interface allows
                users to easily navigate through various simulation settings,
                visualize car-to-car communication in real-time, and access data
                analytics, enhancing the overall user experience. However, the
                application is optimized solely for desktop use and does not
                support mobile devices.
              </p>

              <div className="my-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                <Image
                  src="/showcase/c2csim/c1.png"
                  alt="c1"
                  className="object-contain"
                  height={1080}
                  width={1920}
                />
                <Image
                  src="/showcase/c2csim/c2.png"
                  alt="c2"
                  className="object-contain"
                  height={1080}
                  width={1920}
                />
              </div>
            </div>

            {/* Challenges and Solutions */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Challenges and Solutions
              </h1>
              <p className="max-w-[1400px]">
                One of the primary challenges was developing a complex car
                simulation environment, which was addressed by adopting SUMO.
                However, integrating SUMO with C++ posed another significant
                hurdle due to limited documentation, which was overcome by
                creating a custom library to bridge the gap. Additionally, the
                conversion of geographic coordinates to the Lambert93 projection
                required the development of custom mathematical functions,
                ensuring accurate mapping and simulation.
              </p>
            </div>

            {/* Future Improvements */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Future Improvements
              </h1>
              <p className="max-w-[1400px]">
                The project has the potential for further development by the UHA
                research group, with opportunities to enhance its simulation
                capabilities, support additional geographic projections, and
                expand compatibility with various data sources.
              </p>
            </div>

            {/* Conclusion */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">Conclusion</h1>
              <p className="max-w-[1400px]">
                C2CSim serves as a powerful tool for testing and validating
                car-to-car communication systems, playing a pivotal role in the
                planning and deployment of autonomous vehicle infrastructure.
                Its wide adoption by mobile service providers and car
                manufacturers highlights its effectiveness in simulating
                real-world traffic conditions and communication protocols. The
                project’s innovative integration of SUMO with C++ and its
                ability to provide comprehensive data analytics make it a
                valuable asset for stakeholders. As the field of autonomous
                driving and smart transportation continues to evolve, C2CSim
                offers a robust foundation for further development and research
                by the UHA research group, with the potential to drive
                advancements in vehicle communication technologies and
                infrastructure planning.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default c2csim;
