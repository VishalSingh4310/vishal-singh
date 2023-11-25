import React from "react";
import { Experience } from "./data.types";

const ExperienceData: Experience[] = [
  {
    title: <>Full Stack Developer &#183; Digital Trons</>,
    desc: (
      <div className="mt-1">
        <p className="mt-1">
          Worked with a variety of different languages, and frameworks such as
          <span className="font-medium">
            {" "}
            GraphQL, JavaScript, TypeScript, React, AWS lambda, Serverless
          </span>{" "}
          etc.
        </p>
        <p className="mt-1">
          Worked as a{" "}
          <span className="font-medium">
            backend developer and frontend developer
          </span>{" "}
          with a team to build an Influencer marketing metrics website.
        </p>
        <p className="mt-1">
          Communicate and collaborate with multi-disciplinary teams of engineers
          and designers on a daily basis.
        </p>
      </div>
    ),
    link: "https://digitaltrons.com/",
    duration: <>2022 &mdash; Present</>,
  },
  {
    title: <>Full Stack Developer &#183; ADmyBRAND</>,
    desc: (
      <div className="mt-1">
        <p className="mt-1">
          Developed and shipped a highly interactive mobile app
          <span className="font-medium"> (ADify)</span> for Advertisement using
          <strong>React Native</strong>.
        </p>
        <p className="mt-1">
          Built and shipped internal APIs for this mobile app in{" "}
          <strong>golang</strong> as the main lead.
        </p>
        <p className="mt-1">
          Worked on the main website for ADmyBRAND and developed UI using{" "}
          <strong>NextJS</strong>.
        </p>
      </div>
    ),
    link: "https://in.admybrand.com/",
    duration: <>May 2021 &mdash; Nov 2021</>,
  },
  {
    title: <>Frontend Developer Intern &#183; Intellify</>,
    desc: (
      <div className="mt-1">
        <p className="mt-1">
          Developed and maintained code for student education platform primarily
          using <strong>HTML, CSS, Sass, JavaScript, and jQuery </strong>and
          also backend APIs using <strong>CodeIgniter framework</strong>.
        </p>
        <p className="mt-1">
          Tested sites in various browsers and devices to ensure cross-browser
          compatibility and mobile responsiveness.
        </p>
      </div>
    ),
    duration: <>Apr 2021 &mdash; Jun 2021</>,
  },
];

export default ExperienceData;
