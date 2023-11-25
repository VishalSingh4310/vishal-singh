import React, { FC, ReactNode } from "react";
import { Reveal } from "@molecules";
interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
const Heading: FC<HeadingProps> = ({ children, ...props }) => {
  return (
    <Reveal>
      <h1 {...props} className={`${props?.className} text-4xl text-[#3e0079] `}>
        {children}
      </h1>
    </Reveal>
  );
};

export default Heading;
