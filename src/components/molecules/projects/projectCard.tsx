import React, { FC } from "react";
import { CiFolderOn } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import Chips from "../../chips";
import { Project } from "@utils";
import Link from "next/link";
import { Reveal } from "@components";
import { motion } from "framer-motion";
interface ProjectCardProps {
  data: Project;
  delay?: number;
}
const ProjectCard: FC<ProjectCardProps> = ({ data, delay }) => {
  return (
    <Reveal
      whileHover={{
        y: -5,
        transition: { duration: 0.25 },
      }}
      className="h-full"
      delay={delay ? delay : undefined}
    >
      <div className="p-8 h-full rounded bg-primary-charcoal hover:bg-gradient-to-r from-[#F2F0FE] to-[#FEF1F5]">
        <div className="flex items-center justify-between">
          <CiFolderOn size={40} />
          <Link target="_blank" href={data?.link || "#"}>
            <MdOutlineArrowOutward size={20} className="ml-1 cursor-pointer " />
          </Link>
        </div>
        <div className="mt-4">
          <div>
            <h3 className="text-xl text-primary-midnight font-semibold">
              {data.title}
            </h3>
            <div className="mt-1 text-primary-midnight text-sm">
              {data.desc}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            {data.techs.map((tech: string, index: number) => (
              <Chips key={index} className="mr-2" title={tech} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
