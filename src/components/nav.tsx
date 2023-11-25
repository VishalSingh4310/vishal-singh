import Link from "next/link";
import React, { FC } from "react";

const Nav: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="fixed w-96  text-center bottom-5 left-0 right-0 z-50 mx-auto ">
      <div
        className={` ${className} flex tracking-wide shadow-normal-plan-card text-sm justify-around  items-center rounded-xl px-8 py-3 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80`}
      >
        <Link href={"#home"} className="hover:font-semibold">
          Home
        </Link>
        <span className="text-gray-200">|</span>
        <Link href={"#projects"} className="hover:font-semibold">
          Projects
        </Link>
        <span className="text-gray-200">|</span>
        <Link href={"#contact"} className="hover:font-semibold">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
