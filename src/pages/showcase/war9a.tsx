import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Header from "@src/components/UI/Header";
import { DiscIcon, Github, Globe } from "lucide-react";

const war9a: NextPage = () => {
  return (
    <>
      <Head>
        <title>FH - War9a</title>
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
            <h1 className="gallient my-4 text-8xl">War9a</h1>
            {/* Links */}
            <div className="mb-6 flex items-center gap-2 self-end">
              <Link
                href={"https://war9a.com"}
                className=" flex gap-2 rounded border-[1px] border-white/20 p-2"
                target="_blank"
              >
                <Globe /> Website
              </Link>
              <Link
                href={"https://github.com/Clstialdev/War9a"}
                className=" flex gap-2 rounded border-[1px] border-white/20 p-2"
                target="_blank"
              >
                <Github /> Github
              </Link>
            </div>
          </div>
          {/* Descritption */}
          <div className="flex justify-between text-xl">
            <p className="max-w-[75%]">{`A mobile app replacing traditional queue systems with AI-driven virtual management, optimizing costs and time for businesses and users, ideal for any location with queues.`}</p>
            <div>
              <p className="text-center text-sm text-white text-opacity-70">
                Tag
              </p>
              <p className="">Web/Mobile development</p>
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
                src="/showcase/war9a/war9a.png"
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
                War9a is a mobile application designed to replace traditional
                queue systems with an AI-driven virtual management solution. It
                aims to optimize costs and time for businesses and users by
                offering a streamlined, efficient alternative to physical
                queues. War9a is suitable for various settings where queues are
                common, such as banks, hospitals, and retail stores.
              </p>
              {/* Images */}
              <div className="mt-8 grid grid-cols-1">
                {/* Full Width Image */}
                <div className="relative w-full">
                  <Image
                    height={1920}
                    width={1080}
                    className="h-full w-full object-cover"
                    src="/showcase/war9a/desktop_home.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* Technical Implementation */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Technical Implementation
              </h1>
              <p className="max-w-[1400px]">
                War9a leverages modern web technologies to deliver a
                high-performance application. The platform is built using
                Next.js for server-side rendering and dynamic content
                management, along with Tailwind CSS for responsive styling. The
                backend is powered by Supabase, which provides a secure,
                scalable, and efficient database solution. Additional tools like
                Drizzle ORM, Docker, and Traefik are employed to enhance
                scalability, load balancing, and ease of deployment.
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
                  src="/icons/supabase.png"
                  alt="supabase icon"
                  height={64}
                  width={64}
                  className="object-contain"
                />
                <Image
                  src="/icons/jotai.png"
                  alt="jotai icon"
                  height={64}
                  width={64}
                  className="object-contain"
                />
                <Image
                  src="/icons/drizzle.jpg"
                  alt="drizzle icon"
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
                <Image
                  src="/icons/docker.png"
                  alt="docker icon"
                  height={64}
                  width={64}
                  className="object-contain"
                />
                <Image
                  src="/icons/traefik.png"
                  alt="traefik icon"
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
                  AI-Driven Queue Management:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                War9a integrates artificial intelligence to dynamically manage
                queues, predict wait times, and optimize the distribution of
                clients across different service points.
              </p>

              {/* Images */}
              <div className="mt-8 grid grid-cols-1">
                {/* Full Width Image */}
                <div className="relative w-full">
                  <Image
                    height={1920}
                    width={1080}
                    className="h-full w-full object-cover"
                    src="/showcase/war9a/desktop_queue.webp"
                    alt=""
                  />
                </div>
              </div>

              {/* BP2 */}
              <div className="mt-4 flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Microservices Architecture:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                The platform employs a microservices-based architecture for
                scalability and flexibility, allowing for independent
                development and deployment of each component.
              </p>

              {/* BP3 */}
              <div className="mt-4 flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Real-Time Data Synchronization:{" "}
                </h4>
              </div>
              <p className="max-w-[1400px]">
                Supabase provides real-time data synchronization, ensuring that
                all users have up-to-date information on queue status and wait
                times.
              </p>

              {/* BP4 */}
              <div className="mt-4 flex items-center gap-2">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Cross-Platform Compatibility:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                War9a is developed as a cross-platform application, ensuring
                compatibility with multiple devices and operating systems, while
                providing a consistent user experience across platforms.
              </p>

              {/* BP5 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Containerization with Docker:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                Utilizing Docker, War9a achieves efficient containerization of
                its components, allowing for dynamic scaling and rapid
                deployment in diverse environments.
              </p>
              {/* BP6 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Load Balancing with Traefik:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                Traefik is used for advanced load balancing, routing traffic
                efficiently across multiple instances to avoid bottlenecks and
                ensure optimal performance.
              </p>
            </div>

            {/* User Interface and Experience */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                User Interface and Experience
              </h1>
              <p className="max-w-[1400px]">
                War9a&apos;s user interface is designed for simplicity and ease
                of use. Developed with Tailwind CSS and React components, it
                provides a responsive and intuitive experience across all
                devices. The application features a clean layout with easy
                navigation, allowing users to join queues, track their position
                in real-time, and receive notifications with minimal effort.
              </p>
            </div>

            {/* Internationalization and Responsiveness */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Internationalization and Responsiveness
              </h1>
              <p className="max-w-[1400px]">
                The application is designed to be fully responsive, providing an
                optimized experience on both mobile and desktop devices.
                War9a&apos;s use of modern web development practices ensures
                that it adapts to different screen sizes and resolutions, making
                it accessible to a wider audience. Furthermore, the app is built
                with internationalization in mind, allowing easy localization
                for multiple languages to cater to a global user base.
              </p>
            </div>
            {/* Images */}
            <div className="mt-8 grid grid-cols-3 gap-2">
              <div className="relative w-full">
                <Image
                  height={1920}
                  width={1080}
                  className="h-full w-full object-cover"
                  src="/showcase/war9a/mobile_queue.webp"
                  alt=""
                />
              </div>
              <div className="relative w-full">
                <Image
                  height={1920}
                  width={1080}
                  className="h-full w-full object-cover"
                  src="/showcase/war9a/mobile_drawer.webp"
                  alt=""
                />
              </div>
              <div className="relative w-full">
                <Image
                  height={1920}
                  width={1080}
                  className="h-full w-full object-cover"
                  src="/showcase/war9a/mobile_management.webp"
                  alt=""
                />
              </div>
            </div>

            {/* Challenges and Solutions */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Challenges and Solutions
              </h1>
              <p className="max-w-[1400px]">
                The application is designed to be fully responsive, providing an
                optimized experience on both mobile and desktop devices.
                War9a&apos;s use of modern web development practices ensures
                that it adapts to different screen sizes and resolutions, making
                it accessible to a wider audience. Furthermore, the app is built
                with internationalization in mind, allowing easy localization
                for multiple languages to cater to a global user base.
              </p>
            </div>

            {/* Future Improvements */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Future Improvements
              </h1>
              <p className="max-w-[1400px]">
                War9a aims to further enhance its capabilities by incorporating
                more advanced AI features, such as predictive analytics for
                queue management, and expanding its support for additional
                languages and regions. Future updates may also include
                integration with external systems, such as customer relationship
                management (CRM) platforms and enterprise resource planning
                (ERP) tools, to offer a more comprehensive service suite.
              </p>
            </div>

            {/* Conclusion */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">Conclusion</h1>
              <p className="max-w-[1400px]">
                War9a revolutionizes the way businesses and users manage queues
                by leveraging cutting-edge technology. With its AI-driven
                virtual management and microservices-based architecture, War9a
                offers a scalable, efficient, and user-friendly solution to
                traditional queue management challenges. As the app continues to
                evolve, it promises to further enhance user experience and
                operational efficiency, setting new standards in the domain of
                smart queue management.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default war9a;
