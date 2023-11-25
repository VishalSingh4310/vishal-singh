"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { FaBehanceSquare } from "react-icons/fa";
import {
  Heading,
  MainProjectCard,
  Contact,
  Projects,
  ExperienceCard,
  Reveal,
} from "@components";
import { ProjectData, ExperienceData } from "@utils";
import { motion } from "framer-motion";

export default function Home() {
  const variants = {
    final: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -700 },
  };
  return (
    <main>
      <div
        id="home"
        className="flex min-h-screen  justify-between overscroll-auto"
      >
        <motion.div
          variants={variants}
          transition={{
            duration: 0.8,
            delay: 0,
          }}
          initial="initial"
          animate={"final"}
          className="z-10 h-screen bg-gradient-to-b from-[#F2F0FE] via-[#FEF1F5] to-[#FFFFFF] p-24  w-full flex-col justify-between text-sm lg:flex lg:max-w-2xl"
        >
          <div className="max-w-5xl">
            <Reveal delay={0.4}>
              <h1 className="text-6xl font-bold">Vishal Singh</h1>
            </Reveal>
            <Reveal delay={0.7}>
              <p className="mt-2 text-lg font-medium">Full stack developer</p>
              <p className="mt-1  text-base lg:w-[80%]">
                I'm full stack developer with a passion for front end
                development and design.
                {/* I build exceptional and accessible digital experiences for the web. */}
              </p>
            </Reveal>
          </div>
          <div className="flex items-center justify-evenly w-1/3 text-xl">
            <Link href={"#"}>
              <FaGithub />
            </Link>
            <Link href={"#"}>
              <BsLinkedin />
            </Link>
            <Link href={"#"}>
              <PiDribbbleLogoFill />
            </Link>
            <Link href={"#"}>
              <FaBehanceSquare />
            </Link>
          </div>
        </motion.div>
        <div className="w-full  justify-between text-sm overflow-y-scroll h-screen sectionWithInvisibleScrollbar  lg:flex">
          <div className="p-24">
            <Reveal delay={0.5}>
              <p className="mt-1 text-base w-full">
                A highly passionate developer at
                <span className="font-semibold"> Digital Trons</span>. With a
                relentless curiosity and a love for turning lines of code into
                functional and aesthetically pleasing solutions.
              </p>
              <p className="mt-2 text-base w-full">
                Whether it's solving complex problems or embracing new
                challenges, I approach every project with enthusiasm and a
                desire to create meaningful, user-centric solutions.
              </p>
            </Reveal>
            <div className="mt-14 ">
              {ExperienceData.map((exp, index) => (
                <Reveal
                  key={index}
                  delay={
                    ExperienceData.length == index + 1 ? 0 : 0.3 * index + 1
                  }
                >
                  <ExperienceCard data={exp} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="p-24 mt-10">
        <Heading>Some thing I’ve built</Heading>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <MainProjectCard data={ProjectData.Ubq} delay={0.3} />
          <MainProjectCard data={ProjectData.ADmyBRAND} delay={0.6} />
          <MainProjectCard data={ProjectData.Adify} delay={0.7} />
        </div>

        <Projects />
      </div>
      <Contact />
    </main>
  );
}
