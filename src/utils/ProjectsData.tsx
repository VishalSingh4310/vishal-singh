import React from "react";
import Image from "next/image";
import { Adfiy, Admybrand, Beep, UBQ } from "@assets";
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
  Ecommerce: {
    title: "Beep Shop",
    image: <Image priority src={Beep} alt="Beep shop" />,
    desc: "I've developed a  e-commerce project aimed at providing a seamless and enjoyable online shopping experience. ",
    link: "https://ecommerce-v2-sable.vercel.app/",
    techs: ["NextJs", "Javascript"],
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
        Whether you&apos;re a home chef seeking new recipes or someone looking
        to explore the world of gastronomy, It is your ideal culinary companion
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
    techs: ["ReactJS", "TailwindCSS", "NodeJS"],
  },
  SocialApp: {
    title: "Social Web App",
    image: <Image priority src={Adfiy} alt="s" />,
    desc: (
      <p>
        A social media project designed to connect people, share experiences,
        and foster meaningful connections in a digital space.
        <br></br>
        <br></br>
        Social media web app is an immersive platform built on Next.js, Tailwind
        CSS, Redux, Material-UI, and Firebase.
      </p>
    ),
    link: "https://social-web-app.vercel.app/",
    techs: ["NextJs", "TailwindCSS", "Firebase", "Material UI"],
  },
  ChatApp: {
    title: "Chat Web App",
    image: <Image priority src={Adfiy} alt="s" />,
    desc: (
      <p>
        This web application provides a user-friendly and secure platform for
        individuals to engage in real-time conversations, share ideas, and build
        connections across the virtual landscape.
        <br></br>
        <br></br>
        Chat web app is an immersive platform built on React.js, Material UI,
        Redux and Firebase.
      </p>
    ),
    link: "https://github.com/VishalSingh4310/joychat--Chat-Web-App",
    techs: ["ReactJs", "Firebase", "Material UI"],
  },
};

export default ProjectData;
