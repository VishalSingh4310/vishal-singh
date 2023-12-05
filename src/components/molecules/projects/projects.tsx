import React from "react";
import ProjectCard from "./projectCard";
import { ProjectData } from "@utils";
import { Heading } from "@components";

const Projects = () => {
  return (
    <div className="py-12">
      <Heading>Passion Projects Gallery</Heading>
      <div className="mt-12 h-full grid grid-cols-3 gap-4">
        <ProjectCard data={ProjectData.MovieApp} delay={0.3} />
        <ProjectCard data={ProjectData.FoodApp} delay={0.6} />
        <ProjectCard data={ProjectData.Appointment} delay={0.8} />
        <ProjectCard data={ProjectData.SocialApp} delay={1} />
        <ProjectCard data={ProjectData.ChatApp} delay={1.3} />
      </div>
    </div>
  );
};

export default Projects;
