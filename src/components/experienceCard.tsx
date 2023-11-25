import React, { FC } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Experience } from "@utils";
import Link from "next/link";
import { link } from "fs";
interface ExperienceCardProps {
  data: Experience;
}
const ExperienceCard: FC<ExperienceCardProps> = ({ data }) => {
  return (
    <div className="p-4 py-6 flex rounded-lg transition-all   hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 hover:bg-gradient-to-r from-[#F2F0FE] to-[#FEF1F5]">
      <p className="mt-1.5 min-w-[180px] uppercase text-xs font-medium tracking-wider text-slate-500">
        {data.duration}
      </p>
      <div>
        <Link
          className={`${data?.link ? "cursor-pointer" : "cursor-auto"}`}
          href={data?.link || "#"}
        >
          <>
            <h3 className="text-lg font-medium flex items-center">
              {data.title}
              {data?.link && (
                <MdOutlineArrowOutward className="ml-1 cursor-pointer hover:-translate-y-1 an" />
              )}
            </h3>
            {data.desc}
          </>
        </Link>
      </div>
    </div>
  );
};

export default ExperienceCard;
