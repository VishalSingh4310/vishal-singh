import React, { FC } from "react";
import { Project } from "@utils";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Chips, Reveal } from "@components";
import Link from "next/link";
import { motion } from "framer-motion";
interface MainProjectProps {
  data: Project;
  className?: string;
  delay?: number;
}
const MainProjectCard: FC<MainProjectProps> = ({ data, className, delay }) => {
  return (
    <Reveal delay={delay ? delay : undefined}>
      <div
        className={`${className} rounded hover:bg-gradient-to-r from-[#F2F0FE] to-[#FEF1F5]`}
      >
        <div className="w-full h-[40vh] rounded  object-cover overflow-hidden">
          {data.image}
        </div>
        <div className="p-6 pb-6">
          <h2 className="mt-4 text-xl font-semibold text-primary-midnight">
            {data.title}
          </h2>
          <p className="mt-2 text-primary-midnight">{data.desc}</p>
          <div className="mt-4 flex items-center">
            {data.techs.map((tech: string, index: number) => (
              <Chips key={index} className="mr-2" title={tech} />
            ))}
          </div>
          <motion.div
            whileHover={{
              y: -5,
              transition: { duration: 0.25 },
            }}
            className="w-fit"
          >
            <Link
              href={data.link}
              target="_blank"
              className="inline-flex w-fit items-center mt-6 text-sm underline cursor-pointer"
            >
              Explore{" "}
              <MdOutlineArrowOutward className="ml-1 cursor-pointer" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
};

export default MainProjectCard;
