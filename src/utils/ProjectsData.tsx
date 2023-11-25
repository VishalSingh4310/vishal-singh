import React from "react";
import Image from "next/image";
import { Adfiy, Admybrand, UBQ } from "@assets";
import { ProjectDataType } from "./data.types";

const ProjectData: ProjectDataType = {
  Ubq: {
    title: "Ubiquitous",
    image: <Image priority src={UBQ} alt="ubq" />,
    desc: " Ubiquitous helps brands create, scale, and deploy internet-shaking influencer marketing campaigns. Connect with influencers, manage multiple campaigns, and track results, all in one system that simplifies your marketing efforts.",
    link: "https://www.ubiquitousinfluence.com/",
    techs: ["ReactJS", "Javascript", "AWS Serverless", "MongoDB"],
  },
  ADmyBRAND: {
    title: "ADmyBRAND",
    image: <Image priority src={Admybrand} alt="admybrand" />,
    desc: " ADmyBRAND is One-Stop solution for everything Marketing.It helps you browse and compare all types of ads (search engine for ads).It helps you book all types of ads in realtime (even Newspaper, outdoor, TV, Radio, Infleuencer or digital)",
    link: "https://us.admybrand.com/",
    techs: ["ReactJS", "Javascript", "Golang"],
  },
  Adify: {
    title: "Adify",
    image: <Image priority src={Adfiy} alt="admybrand" />,
    desc: "ADify by ADmyBRAND is One-Stop solution for everything Marketing. The super app helps you for everything that a marketer needs.",
    link: "https://play.google.com/store/apps/details?id=com.admybrand.adify&hl=en_IN&gl=US",
    techs: ["React Native", "Javascript", "Golang"],
  },
  FoodApp: {
    title: "Food Flutter App",
    image: <Image priority src={Adfiy} alt="admybrand" />,
    desc: (
      <>
        This app is a delectable food app developed using Flutter and enriched
        with the flavors of various food APIs.
        <br></br>
        <br></br>
        Whether you're a home chef seeking new recipes or someone looking to
        explore the world of gastronomy, It is your ideal culinary companion
      </>
    ),
    link: "https://play.google.com/store/apps/details?id=com.admybrand.adify&hl=en_IN&gl=US",
    techs: ["Flutter", "TMDB API"],
  },
  MovieApp: {
    title: "Movie Flutter App",
    image: <Image priority src={Adfiy} alt="admybrand" />,
    desc: (
      <p>
        This app is a cutting-edge movie app developed using Flutter and powered
        by the TMDB (The Movie Database) API.
        <br></br>
        <br></br>
        This innovative application brings the world of cinema to your
        fingertips, providing a seamless and immersive movie-watching
        experience.
      </p>
    ),
    link: "https://play.google.com/store/apps/details?id=com.admybrand.adify&hl=en_IN&gl=US",
    techs: ["Flutter", "TMDB API"],
  },
  Appointment: {
    title: "Appointment Tracker",
    image: <Image priority src={Adfiy} alt="admybrand" />,
    desc: (
      <p>
        A Appointment tracker is a tool designed to help individuals or teams
        manage and monitor their time effectively.
        <br></br>
        <br></br>
        It helps to create slot for team member or any client and appoint a time
        slot with contact details.
      </p>
    ),
    link: "https://play.google.com/store/apps/details?id=com.admybrand.adify&hl=en_IN&gl=US",
    techs: ["ReactJS", "TailwindCSS","NodeJS" ],
  },
};

export default ProjectData;
