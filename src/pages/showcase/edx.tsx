import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Header from "@src/components/UI/Header";
import { DiscIcon, Globe } from "lucide-react";

const edx: NextPage = () => {
  return (
    <>
      <Head>
        <title>FH - EDX</title>
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
            <h1 className="gallient my-4 text-8xl">EDucation eXpert (EDX)</h1>
            {/* Links */}
            <div className="mb-6 flex items-center gap-2 self-end">
              <Link
                href={
                  "https://endyearproject-2024-teacher-assistant-01.vercel.app/"
                }
                className=" flex gap-2 rounded border-[1px] border-white/20 p-2"
                target="_blank"
              >
                <Globe /> Website
              </Link>
            </div>
          </div>
          <div className="flex justify-between text-xl">
            <p className="max-w-[75%]">{`A comprehensive school management platform allowing dynamic classroom layouts, student enrollment, attendance tracking, and exam seating plans, designed for administrators, teachers, and students.`}</p>
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
                src="/showcase/edx/page-example.png"
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
                EDX (EDucation eXpert) is a comprehensive educational management
                platform designed to enhance administrative efficiency and
                improve the experience of students, teachers, and academic
                administrators. By integrating diverse functionalities—such as
                student and teacher management, course scheduling, seating
                arrangements, and real-time presence tracking—EDX aims to
                streamline educational processes within a single, cohesive
                platform. Developed with modern web technologies and a robust
                database architecture, EDX provides intuitive interfaces and
                optimizes workflows for its users.
              </p>

              <p className="mt-8">Project Architecture: </p>
              <div className="mt-8 grid grid-cols-2 gap-2">
                <div className="relative w-full">
                  <Image
                    height={1920}
                    width={1080}
                    className="h-full w-full object-cover"
                    src="/showcase/edx/architecture.png"
                    alt=""
                  />
                </div>
                <div className="relative w-full">
                  <Image
                    height={1920}
                    width={1080}
                    className="h-full w-full object-cover"
                    src="/showcase/edx/DB_architecture.png"
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
                EDX is built using the Next.js framework, which provides a
                hybrid rendering approach with server-side and client-side
                capabilities, enhancing both performance and user experience.
                The frontend employs TypeScript for type safety and Tailwind CSS
                for styling, along with libraries like Framer Motion for
                animations and D3.js for interactive data visualizations. The
                backend leverages Supabase for authentication, database
                management, and storage, supported by PostgreSQL and Drizzle ORM
                for type-safe database interactions.
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
                  alt="supabase icon"
                  height={64}
                  width={64}
                  className="object-contain"
                />
                <Image
                  src="/icons/drizzle.jpg"
                  alt="supabase icon"
                  height={64}
                  width={64}
                  className="object-contain"
                />
                <Image
                  src="/icons/framermotion.png"
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
                  Student and Teacher Management:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                EDX includes features to manage student and teacher profiles,
                track attendance, and handle enrollment processes, all
                integrated within a secure and user-friendly environment.
              </p>

              {/* Images */}
              <div className="mt-8 grid grid-cols-1">
                {/* Full Width Image */}
                <div className="relative w-full">
                  <Image
                    height={1920}
                    width={1080}
                    className="h-full w-full object-cover"
                    src="/showcase/edx/teacher_dashboard.png"
                    alt=""
                  />
                </div>
              </div>

              {/* BP2 */}
              <div className="mt-4 flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Seating Arrangements:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                An interactive drag-and-drop interface allows administrators to
                create and adjust dynamic seating plans for classrooms, storing
                these plans in the database for future reference and
                adjustments.
              </p>

              {/* Images */}
              <div className="mt-8 grid grid-cols-1">
                {/* Full Width Image */}
                <div className="relative w-full">
                  <Image
                    height={1920}
                    width={1080}
                    className="h-full w-full object-cover"
                    src="/showcase/edx/page-example.png"
                    alt=""
                  />
                </div>
              </div>

              {/* BP3 */}
              <div className="mt-4 flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">Course Scheduling: </h4>
              </div>
              <p className="max-w-[1400px]">
                The platform provides tools for creating and managing course
                timetables, assigning classes to teachers and rooms, and
                integrating with calendars for better organization.
              </p>

              {/* Images */}
              <div className="mt-8 grid grid-cols-1">
                {/* Full Width Image */}
                <div className="relative w-full">
                  <Image
                    height={1920}
                    width={1080}
                    className="h-full w-full object-cover"
                    src="/showcase/edx/teacher_schedule.png"
                    alt=""
                  />
                </div>
              </div>

              {/* BP4 */}
              <div className="mt-4 flex items-center gap-2">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Real-Time Presence Tracking:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                EDX tracks student attendance in real time, providing immediate
                updates to administrators and teachers.
              </p>

              {/* Images */}
              <div className="mt-8 grid grid-cols-2 gap-2">
                <div className="relative w-full">
                  <Image
                    height={1920}
                    width={1080}
                    className="h-full w-full object-cover"
                    src="/showcase/edx/student_seating.png"
                    alt=""
                  />
                </div>
                <div className="relative w-full">
                  <Image
                    height={1920}
                    width={1080}
                    className="h-full w-full object-cover"
                    src="/showcase/edx/presence_tracking.png"
                    alt=""
                  />
                </div>
              </div>

              {/* BP5 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Security and Authentication:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                Built-in authentication and role-based access control (RBAC)
                ensure secure access, with encryption and secure coding
                practices to protect sensitive data.
              </p>
              {/* BP6 */}
              <div className="flex items-center gap-2 ">
                <DiscIcon size={20} />
                <h4 className="my-1 text-2xl underline">
                  Performance Optimization:
                </h4>
              </div>
              <p className="max-w-[1400px]">
                The platform uses Next.js&apos;s code splitting, Vercel&apos;s
                edge caching, and database indexing to maintain fast performance
                and scalability.
              </p>
            </div>

            {/* Images */}
            <div className="mt-8 grid grid-cols-2 gap-2">
              <div className="relative w-full">
                <Image
                  height={1920}
                  width={1080}
                  className="h-full w-full object-cover"
                  src="/showcase/edx/gtmetrix.png"
                  alt=""
                />
              </div>
              <div className="relative w-full">
                <Image
                  height={1920}
                  width={1080}
                  className="h-full w-full object-cover"
                  src="/showcase/edx/lighthouse.png"
                  alt=""
                />
              </div>
            </div>

            {/* User Interface and Experience */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                User Interface and Experience
              </h1>
              <p className="max-w-[1400px]">
                The EDX user interface is designed for consistency,
                intuitiveness, and responsiveness, with a focus on improving the
                user experience across all devices. It includes a clean,
                cohesive design system created in Figma, providing a unified
                look and feel throughout the platform. Tailwind CSS and
                component libraries like Radix UI and Shadcn UI ensure that the
                platform is both visually appealing and highly accessible.
              </p>
            </div>

            {/* Internationalization and Responsiveness */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Internationalization and Responsiveness
              </h1>
              <p className="max-w-[1400px]">
                EDX is built with a mobile-first approach, ensuring that all
                features are accessible and user-friendly across different
                devices and screen sizes. This responsiveness is achieved
                through the use of Tailwind CSS for adaptive layouts and Framer
                Motion for smooth animations, providing a seamless experience on
                both desktop and mobile devices. The platform is also designed
                with future multilingual support in mind, aiming to cater to a
                broader audience by allowing for easy integration of multiple
                languages.
              </p>
            </div>

            {/* Challenges and Solutions */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Challenges and Solutions
              </h1>
              <p className="max-w-[1400px]">
                The development of EDX encountered several challenges, such as
                integrating complex libraries like dnd-kit for drag-and-drop
                functionality and managing authentication flows with Supabase.
                These were addressed through creative problem-solving, such as
                developing custom authentication hooks and experimenting with
                multiple design iterations to optimize performance and user
                experience. Time constraints were managed by employing agile and
                rapid application development methodologies, allowing for
                iterative improvements and timely delivery.
              </p>
            </div>

            {/* Future Improvements */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">
                Future Improvements
              </h1>
              <p className="max-w-[1400px]">
                The potential for further development includes enhancing
                reporting tools, adding multilingual support, integrating with
                external calendar systems, and conducting stress testing to
                handle larger numbers of users. The project envisions EDX
                evolving into a full-fledged educational ecosystem that
                encompasses all aspects of educational management.
              </p>
            </div>

            {/* Conclusion */}
            <div>
              <h1 className="mb-3 mt-8 text-4xl font-bold">Conclusion</h1>
              <p className="max-w-[1400px]">
                EDX has successfully laid the foundation for a versatile and
                effective educational management platform. By centralizing
                critical administrative functions and utilizing modern web
                technologies, EDX has demonstrated its potential to streamline
                operations and improve the educational experience for all
                stakeholders. The project’s continued development promises to
                expand its functionality, scalability, and impact, positioning
                it as a valuable tool for educational institutions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default edx;
