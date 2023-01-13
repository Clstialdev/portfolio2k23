/* eslint-disable @typescript-eslint/no-explicit-any */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";

const SelectedWorks: NextPage = () => {
  return (
    <>
      <div
        className="mt-12 flex min-h-screen w-screen flex-col overflow-hidden rounded px-[5%] sm:pt-28"
        id="selected-works"
      >
        <h1 className="text-4xl">Selected Works</h1>
        <div className="mt-12 grid h-full w-full grid-cols-1 gap-4 xl:grid-cols-2 xxl:grid-cols-3 ">
          <ShowcaseItem
            index={1}
            total={9}
            year={2023}
            title={"Iridescence"}
            image={"/content/curtains.jpg"}
            tag="3D Art"
            href="/showcase/iridescence"
          />

          <ShowcaseItem
            index={2}
            total={9}
            year={2021}
            title={"Cut My Head Off"}
            image={"/showcase/cmho/car.png"}
            tag="3D Animation"
            href="/showcase/cmho"
          />
          <ShowcaseItem
            index={3}
            total={9}
            year={2021}
            title={"Eve & The Serpent"}
            image={"/showcase/eve.jpg"}
            tag="3D Art"
            href="/showcase/eve"
          />

          <ShowcaseItem
            index={4}
            total={9}
            year={2021}
            title={"Halll AI Art"}
            image={"/showcase/halll.jpg"}
            tag="UI/UX Design"
            href="https://www.figma.com/file/Gz0G1LmtqPc5lK6SDGnZH0/Hall-art?node-id=0%3A1&t=FXeKnWsAIQ7VEaZY-1"
          />

          <ShowcaseItem
            index={5}
            total={9}
            year={2021}
            title={"Jet Life Stakepools"}
            image={"/showcase/jetlife.jpg"}
            tag="Web Dev"
            href="https://www.jetlifestaking.org"
          />
          <ShowcaseItem
            index={6}
            total={9}
            year={2021}
            title={"Tim Ohlsen Portfolio"}
            image={"/showcase/tim.jpg"}
            tag="UI/UX Design"
            href="https://www.figma.com/file/WtHE05I9gb85clEOEtSPlK/Tim-Ohlsen?node-id=0%3A1&t=yYaCP8AEvy9UNMpe-1"
          />
          <ShowcaseItem
            index={7}
            total={9}
            year={2021}
            title={"War9a App"}
            image={"/showcase/war9a2.jpg"}
            tag="Web Dev"
            href="https://war9a.com/"
          />
          <ShowcaseItem
            index={8}
            total={9}
            year={2022}
            title={"DOMI Online"}
            image={"/showcase/domi.jpg"}
            tag="Web Dev"
            href="https://domionline.io/"
          />
          <ShowcaseItem
            index={9}
            total={9}
            year={2021}
            title={"Blacklist Protocol"}
            image={"/showcase/blacklist.jpg"}
            tag="Web Dev (in progress)"
            href="https://blacklist-pro.vercel.app/"
          />
        </div>
      </div>
    </>
  );
};

interface showcaseItemProps {
  index: number;
  total: number;
  year: number;
  title: string;
  tag?: string;
  image: string;
  unoptimized?: boolean;
  href: string;
}

const ShowcaseItem: NextPage<showcaseItemProps> = ({
  index = 1,
  total = 1,
  title,
  year,
  tag = "Showcase",
  image,
  unoptimized = false,
  href = "/",
}) => {
  return (
    <Link href={href}>
      <div className="group relative h-[400px] w-full hover:cursor-pointer sm:h-[600px]">
        <div className="absolute h-full w-full">
          <Image
            src={image}
            width={2000}
            height={2000}
            className="h-full w-full object-cover"
            alt=""
            unoptimized={unoptimized}
          />
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-2 bg-black bg-opacity-80 opacity-0 backdrop-blur-lg duration-200 group-hover:opacity-100">
          <h1 className="text-2xl">{title}</h1>
          <p className="">{year}</p>
          <div className="absolute bottom-[20px] flex w-full flex-row items-center justify-between px-[3%]">
            <h1>
              0{index}-0{total}
            </h1>
            <h1 className="w-fit rounded-lg border-[1px] border-white py-2 px-4">
              {tag}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SelectedWorks;
