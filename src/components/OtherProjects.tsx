/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowBigRightDash, Github, Globe } from "lucide-react";

type Project = {
  name: string;
  description: string;
  articleLink: string;
  date: string;
  image: string;
  tags: string[];
  links: {
    icon: JSX.Element;
    href: string;
  }[];
};

const projects: Project[] = [
  {
    name: "IncidPro",
    description:
      "A disaster reporting platform that enables users to signal emergencies on a map, request various types of help, and improve response coordination for organizations like the Red Cross.",
    image: "/showcase/incidpro/incidpro.jpg",
    date: "October 11, 2023",
    articleLink: "/showcase/incidpro",
    tags: ["Next.js", "Supabase", "Drizzle ORM", "Typescript"],
    links: [
      //   { icon: <Github size={16} />, href: "#" },
      { icon: <Globe size={16} />, href: "ihm-incidents.vercel.app" },
    ],
  },
  {
    name: "C2C-Sim",
    description:
      "A real-time desktop simulator for car-to-car communication, aiding infrastructure planning for autonomous vehicles, widely utilized by mobile service providers and car manufacturers.",
    image: "/showcase/c2csim/c2csim.png",
    date: "January 27, 2024",
    articleLink: "/showcase/c2csim",
    tags: ["Qt", "C++", "SUMO", "LibSumo"],
    links: [
      {
        icon: <Github size={16} />,
        href: "https://github.com/Clstialdev/c2csim",
      },
      //   { icon: <Globe size={16} />, href: "#" },
    ],
  },
  {
    name: "EDX (EDucation-eXpert)",
    description:
      "A comprehensive school management platform allowing dynamic classroom layouts, student enrollment, attendance tracking, and exam seating plans, designed for administrators, teachers, and students.",
    image: "/showcase/edx/edx.png",
    date: "June 18, 2024",
    articleLink: "/showcase/edx",
    tags: ["Next.js", "Supabase", "Drizzle ORM", "D3js", "Dndkit"],
    links: [
      //   {
      //     icon: <Github size={16} />,
      //     href: "https://github.com/Clstialdev/c2csim",
      //   },
      {
        icon: <Globe size={16} />,
        href: "https://endyearproject-2024-teacher-assistant-01.vercel.app",
      },
    ],
  },
  {
    name: "War9a",
    description:
      "A mobile app replacing traditional queue systems with AI-driven virtual management, optimizing costs and time for businesses and users, ideal for any location with queues.",
    image: "/showcase/war9a/war9a.png",
    date: "July 26, 2022",
    articleLink: "/showcase/war9a",
    tags: ["React Native", "Expo", "React.js", "Firebase", "Ruby"],
    links: [
      {
        icon: <Github size={16} />,
        href: "https://github.com/Clstialdev/War9a",
      },
      {
        icon: <Globe size={16} />,
        href: "https://war9a.com",
      },
    ],
  },
  {
    name: "Insta Image Scraper",
    description:
      "A CLI tool for scraping images from Instagram hashtags or accounts, ideal for creating comprehensive image datasets for research and analysis.",
    image: "/showcase/crowinsta/banner.png",
    date: "April 24, 2022",
    articleLink: "/showcase/crowinsta",
    tags: ["Node.js", "Javascript", "Puppeteer"],
    links: [
      {
        icon: <Github size={16} />,
        href: "https://github.com/Clstialdev/Instagram-Image-Scraper",
      },
      //   {
      //     icon: <Globe size={16} />,
      //     href: "https://war9a.com",
      //   },
    ],
  },
  {
    name: "My Portfolio",
    description:
      "An open-source portfolio template with a clean, easy-to-use codebase, designed to help others quickly create their own professional online presence.",
    image: "/showcase/portfolio2k23/banner.png",
    date: "September 29, 2024",
    articleLink: "/showcase/portfolio2k23",
    tags: ["Next.js", "Typescript", "Tailwind"],
    links: [
      {
        icon: <Github size={16} />,
        href: "https://github.com/Clstialdev/portfolio2k23",
      },
      {
        icon: <Globe size={16} />,
        href: "https://fhstudio.dev",
      },
    ],
  },
];

const OtherProjects: NextPage = () => {
  return (
    <>
      <div
        className="mt-12 flex min-h-screen w-screen flex-col overflow-hidden rounded px-[5%] sm:pt-28"
        id="other-projects"
      >
        <h1 className="text-4xl">Other Projects</h1>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OtherProjects;

function Project({ project }: { project: Project }) {
  return (
    <div className="flex justify-between rounded-lg border-[1px] border-white/20 px-4 py-4 pb-8 xxxl:pb-4">
      {/* Left side */}
      <div>
        <Link href={project.articleLink} target="_blank" className="group">
          {/* Heading */}
          <div className="flex items-end gap-2">
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p className="rounded bg-neutral-800 px-3 py-[6px] text-xs">
              {project.date}
            </p>
            <ArrowBigRightDash className="-translate-x-1/2 opacity-0 duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
          </div>

          {/* Description */}
          <p className="py-3 text-sm text-white/70">{project.description}</p>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <div key={i} className="rounded bg-neutral-800 px-2 py-1 text-xs">
              {tag}
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-2 py-2">
          {project.links.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className=" rounded border-[1px] border-white/20 p-2"
              target="_blank"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      {/* Right Side (Image) */}
      <Link href={project.articleLink} target="_blank" className="group">
        <div className="aspect-video h-full overflow-clip rounded border-white/20 duration-200 group-hover:border-[1px]">
          <Image
            src={project.image}
            width={1920 / 4}
            height={1080 / 4}
            alt=""
            className="h-full object-cover duration-200 group-hover:scale-110"
          />
        </div>
      </Link>
    </div>
  );
}
