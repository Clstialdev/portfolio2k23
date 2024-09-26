/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

const About: NextPage = () => {
  return (
    <div className=" bg-black">
      <div className=" mb-24 mt-12 flex w-screen flex-col px-[5%] pt-12 xl:flex-row xl:justify-between xl:pt-28">
        {/* Text */}
        <div className="mt-16 w-full max-w-[900px] xl:w-1/2">
          <h1 className="text-4xl">About me</h1>
          <p className="mt-4 text-base text-white text-opacity-70 xl:text-lg xl:leading-8 xl:tracking-wide">
            {`I am a passionate web developer, creative creator and artist with 4
          years of experience in Software Development and User Interface
          Engineering. My expertise lies in the design, development, and
          delivery of software systems. I am equipped with a diverse and
          promising skill-set that enables me to effectively self-manage during
          independent projects as well as collaborate as part of a productive
          team.`}
          </p>
          <p className="xltext-lg mt-4 hidden text-base text-white text-opacity-70 sm:block xl:leading-8 xl:tracking-wide">
            Utilizing my creative and artistic skills I am proficient in
            designing and developing in interactive and beautiful yet intuitive
            responsive websites. I also have experience creating mockups for
            various applications including web applications and mobile apps. My
            diverse skillset including my experience as a GFX & 3D Artist allows
            me to provide various services, help across many departments and
            work closely with any team across multiple fields. As well as create
            original and stunning promotional material such as 3D Promos,
            Animations, Flyers, Ads, Graphic Design for the same projects I
            design or code.
          </p>
        </div>

        {/* Image */}
        {/* <div className="h-[85vh] w-[35%] max-w-[600px]">
          <Image
            src="/content/curtains.jpg"
            height={1000}
            width={1000}
            className="h-full object-cover"
            alt=""
          />
        </div> */}

        {/* Loop Video */}
        <div className="mt-8 h-fit w-full max-w-[1000px] xl:mt-0 xl:w-1/2">
          <video
            autoPlay
            muted
            className="h-full"
            loop
            src={"/videos/fallingstars.mp4"}
          >
            your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default About;
