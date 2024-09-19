import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Header from "@src/components/UI/Header";
import { DiscIcon, Github, Globe } from "lucide-react";

const portfolio2k23: NextPage = () => {
  return (
    <>
      <Head>
        <title>FH - Portfolio 2k23</title>
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
            <h1 className="gallient my-4 text-8xl">Portfolio 2k23</h1>
            {/* Links */}
            <div className="mb-6 flex items-center gap-2 self-end">
              <Link
                href={"https://fhstudio.dev"}
                className=" flex gap-2 rounded border-[1px] border-white/20 p-2"
                target="_blank"
              >
                <Globe /> Web Demo
              </Link>
              <Link
                href={"https://github.com/Clstialdev/portfolio2k23"}
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
              <p className="">Web Development</p>
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
                src="/showcase/portfolio2k23/banner.png"
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
                Portfolio2k23 is an open-source template designed to help
                individuals quickly and effortlessly create their professional
                online presence. Built with clean, modular code, it is ideal for
                developers seeking an intuitive and customizable platform to
                showcase their work. This project provides a flexible foundation
                for creating personal portfolios, featuring smooth animations
                and a responsive design.
              </p>
            </div>
            {/* Technical Implementation */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Technical Implementation
              </h1>
              <p className="max-w-[1400px]">
                The project utilizes Next.js for its server-side rendering
                capabilities, ensuring fast performance and SEO optimization.
                Tailwind CSS is employed for rapid styling and responsive
                design, while Framer Motion adds fluid, elegant animations to
                the interface, creating an engaging user experience. The
                portfolio is designed with scalability and ease of customization
                in mind, making it adaptable to various needs.
              </p>
              <div className="mb-8 mt-4 flex flex-wrap gap-4">
                <Image
                  src="/icons/nextjs.png"
                  alt="nextjs icon"
                  height={64}
                  width={64}
                  className="object-contain invert"
                />
                <Image
                  src="/icons/typescript.png"
                  alt="typescript icon"
                  height={64}
                  width={64}
                  className="object-contain"
                />
                <Image
                  src="/icons/tailwind.png"
                  alt="tailwind icon"
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
                  Clean and Modular Codebase:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                The project is built with maintainability and flexibility at its
                core, allowing users to easily modify and extend features
                according to their needs.
              </p>
              {/* BP2 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">Smooth Animations:</h4>
              </div>
              <p className="max-w-[1400px]">
                Framer Motion enables smooth transitions and interactive
                elements throughout the site, enhancing user engagement.
              </p>
              {/* BP3 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">Responsive Design:</h4>
              </div>
              <p className="max-w-[1400px]">
                Tailwind CSS ensures the portfolio looks great on all devices,
                from desktops to mobile, offering an optimized viewing
                experience.
              </p>
              {/* BP4 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Customizable Sections:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                The portfolio comes with pre-built sections such as About Me,
                Projects, and Contact, which can be easily edited or expanded.
              </p>
              {/* BP5 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">Vercel Deployment:</h4>
              </div>
              <p className="max-w-[1400px]">
                Integrated with Vercel for quick and effortless deployment,
                making it easier for users to publish their portfolios with
                minimal setup.
              </p>
            </div>

            {/* User Interface and Experience */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                User Interface and Experience
              </h1>
              <p className="max-w-[1400px]">
                The portfolio offers a clean, minimalist design, ensuring focus
                remains on the content. Each section is designed to be easily
                navigable and visually appealing, with responsive layouts and
                smooth animations. Users can customize colors, fonts, and
                layouts to suit their personal style while maintaining a
                professional appearance.
              </p>
            </div>

            {/* Challenges and Solutions */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Challenges and Solutions
              </h1>
              <p className="max-w-[1400px]">
                The primary challenge was ensuring that the template was both
                easy to use for beginners and flexible enough for more advanced
                users. This was addressed by maintaining a modular codebase with
                detailed documentation, allowing users of all skill levels to
                quickly get up to speed with customization and deployment.
              </p>
            </div>

            {/* Internationalization and Responsiveness */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Internationalization and Responsiveness
              </h1>
              <p className="max-w-[1400px]">
                The portfolio is fully responsive, ensuring seamless performance
                across various screen sizes. With Tailwind CSS, it automatically
                adjusts layouts for optimal display on mobile, tablet, and
                desktop devices. Future versions aim to include
                internationalization features, enabling multi-language support
                to broaden accessibility.
              </p>
            </div>

            {/* Future Improvements */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Future Improvements
              </h1>
              <p className="max-w-[1400px]">
                Planned improvements include enhanced accessibility features,
                additional customization options such as pre-built themes, and
                integration with third-party APIs to showcase social media or
                project stats dynamically. The project will continue to evolve
                as an ideal solution for developers to quickly build and deploy
                their personal portfolios.
              </p>
            </div>

            {/* Conclusion */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">Conclusion</h1>
              <p className="max-w-[1400px]">
                portfolio2k23 provides an open-source, customizable, and
                responsive solution for developers looking to establish a
                professional online presence. Its clean codebase, built with
                modern web technologies, ensures ease of use and scalability.
                With ongoing development, the portfolio aims to remain a
                versatile tool for creating personalized, visually appealing
                online portfolios.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default portfolio2k23;
