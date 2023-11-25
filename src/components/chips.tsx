import React, { FC } from "react";
interface ChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}
const Chips: FC<ChipsProps> = ({ title, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} px-4 py-1 text-xs rounded-full bg-gradient-to-r from-[#F2F0FE] to-[#FEF1F5]`}
    >
      {title}
    </div>
  );
};

export default Chips;
