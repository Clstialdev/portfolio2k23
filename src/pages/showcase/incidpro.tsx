import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Header from "@src/components/UI/Header";
import { DiscIcon, Globe } from "lucide-react";

const incidpro: NextPage = () => {
  return (
    <>
      <Head>
        <title>FH - IncidPro</title>
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
            <h1 className="gallient my-4 text-8xl">IncidPro</h1>
            {/* Links */}
            <div className="mb-6 flex items-center gap-2 self-end">
              <Link
                href={"https://ihm-incidents.vercel.app/"}
                className=" flex gap-2 rounded border-[1px] border-white/20 p-2"
                target="_blank"
              >
                <Globe /> Website
              </Link>
            </div>
          </div>
          <div className="flex justify-between text-xl">
            <p className="max-w-[75%]">{`A disaster reporting platform that enables users to signal emergencies on a map, request various types of help, and improve response coordination for organizations like the Red Cross.`}</p>
            <div>
              <p className="text-center text-sm text-white text-opacity-70">
                Tag
              </p>
              <p className="">Web development</p>
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
                src="/showcase/incidpro/desktop_home.webp"
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
                Incidpro is a disaster reporting platform designed to enhance
                emergency response by allowing users to signal emergencies on a
                map, request assistance, and coordinate effectively with
                organizations like the Red Cross. The platform features
                real-time reporting, news updates on disasters, and a quick
                search functionality in English and French, all while ensuring
                user privacy through anonymization and data protection measures.
              </p>
            </div>
            {/* Technical Implementation */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Technical Implementation
              </h1>
              <p className="max-w-[1400px]">
                The platform is built with modern web technologies, including
                Next.js for server-side rendering, Tailwind CSS for responsive
                design, and Supabase as a backend solution. Typescript was used
                for type safety, and the application is hosted on Vercel for
                scalability and performance.
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
                  Simulation Environment:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                The platform uses OpenStreetMap (OSM) for disaster
                visualization, allowing users to explore real-time disaster
                reports interactively. It is fully responsive, supporting both
                desktop and mobile environments.
              </p>
              {/* BP2 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Anonymization and Data Privacy:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                User data is anonymized to comply with GDPR regulations. A
                custom algorithm salts geolocation data to protect user privacy
                while maintaining report accuracy.
              </p>
              {/* BP3 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">Content Filtering: </h4>
              </div>
              <p className="max-w-[1400px]">
                A bad word filter detects and mitigates malicious reports,
                ensuring the platform&apos;s integrity.
              </p>
              {/* BP4 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Real-time Dashboard:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                A responsive dashboard provides first responders and
                organizations with critical data and insights, enabling quick
                and informed decision-making.
              </p>
            </div>

            {/* Internationalization */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Internationalization
              </h1>
              <p className="max-w-[1400px]">
                Incidpro is designed to be accessible to a diverse user base,
                with full support for both English and French languages. The
                platform&apos;s search functionality allows users to quickly
                find reports and relevant information in their preferred
                language, enhancing usability and ensuring inclusivity. This
                multilingual capability extends to all aspects of the
                application, from the user interface to the disaster news pages,
                enabling seamless interaction for users across different
                regions.
              </p>

              <div className="my-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                <Image
                  src="/showcase/incidpro/internationalization_en.webp"
                  alt="Internationalization EN"
                  className="object-contain"
                  height={1080}
                  width={1920}
                />
                <Image
                  src="/showcase/incidpro/internationalization_fr.webp"
                  alt="Internationalization FR"
                  className="object-contain"
                  height={1080}
                  width={1920}
                />
              </div>
            </div>

            {/* Responsiveness */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">Responsiveness</h1>
              <p className="max-w-[1400px]">
                Built with a mobile-first approach, Incidpro offers a fully
                responsive design that ensures optimal performance across
                various devices, from desktops to smartphones. The use of
                Tailwind CSS allows for fluid layouts that adapt to different
                screen sizes, maintaining usability and functionality. The
                platform&apos;s responsiveness guarantees that users can report
                emergencies, view disaster maps, and access information in
                real-time, regardless of their device or location.
              </p>

              <div className="my-4 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
                <Image
                  src="/showcase/incidpro/mobile_login.webp"
                  alt="mobile login"
                  className="object-contain"
                  width={1080}
                  height={1920}
                />
                <Image
                  src="/showcase/incidpro/mobile_home.webp"
                  alt="mobile home"
                  className="object-contain"
                  width={1080}
                  height={1920}
                />
                <Image
                  src="/showcase/incidpro/mobile_settings.webp"
                  alt="mobile settings"
                  className="object-contain"
                  width={1080}
                  height={1920}
                />
              </div>
            </div>

            {/* Challenges and Solutions */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Challenges and Solutions
              </h1>
              <p className="max-w-[1400px]">
                The primary challenge was developing the platform within a tight
                two-week deadline while ensuring compliance with GDPR
                regulations. Innovative solutions included using a salting
                algorithm for geolocation anonymization and implementing a
                real-time bad word filtering system to manage the quality and
                reliability of user-generated content.
              </p>
            </div>

            {/* Future Improvements */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Future Improvements
              </h1>
              <p className="max-w-[1400px]">
                The platform has the potential for further development by the
                UHA research group, with opportunities to enhance functionality
                and integrate additional features.
              </p>
            </div>

            {/* Future Improvements */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">Conclusion</h1>
              <p className="max-w-[1400px]">
                Incidpro was selected among five competing projects for further
                development due to its innovative approach and comprehensive
                features. By providing a secure and effective disaster reporting
                solution, it plays a vital role in improving response
                coordination and emergency management.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default incidpro;
