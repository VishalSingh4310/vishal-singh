import { Pattern } from "@assets";
import Image from "next/image";
import React from "react";
import { Heading, Reveal } from "@components";
import Link from "next/link";
const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex flex-col justify-between h-full overflow-hidden bg-gradient-to-r from-[#e8e4ff] to-[#ffe9f0]"
    >
      <Image
        className="absolute right-0"
        priority
        src={Pattern}
        alt="pattern"
      />
      <div className="p-24">
        <Heading>Get in touch</Heading>
        <Reveal delay={0.4}>
          <p className="mt-2 text-[#3e0079] w-3/5">
            Feel free to reach out via{" "}
            <span className="font-bold text-primary-midnight">mail</span>, and
            let's turn ideas into reality. Cheers to creativity, innovation, and
            the endless pursuit of excellence!"
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <button  className="mt-10 w-fit rounded-lg px-6 py-3 bg-gradient-to-r from-[#c7bef8] to-[#f8c2d3]">
            <Link  href="mailto:vishals0134@gmail.com">
            Say Hello
            </Link>
          </button>
        </Reveal>
      </div>
      <p className="mt-2 px-24 pb-4 text-primary-midnight font-medium w-3/5">
        Developed & Designed by Vishal Singh
      </p>
    </div>
  );
};

export default Contact;
