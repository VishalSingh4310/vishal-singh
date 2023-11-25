"use client";
import {
  HTMLMotionProps,
  cubicBezier,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import React, { FC, useEffect, useRef } from "react";
interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animation?: {
    hidden?: {};
    visible?: {};
  };
  delay?: number;
  className?: string;
}
const Reveal: FC<RevealProps> = ({
  children,
  animation,
  delay,
  className,
  ...props
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  useEffect(() => {
    if (inView) {
      mainControl.start("visible");
    }
  }, [inView]);
  return (
    <motion.div {...props} ref={ref} className="relative overflow-hidden">
      <motion.div
        className={` ${className}`}
        variants={{
          hidden: animation?.hidden
            ? animation.hidden
            : {
                opacity: 0,
                y: 25,
              },
          visible: animation?.visible
            ? animation.visible
            : {
                opacity: 1,
                y: 0,
              },
        }}
        transition={{
          duration: 0.5,
          delay: delay ? delay : 0.25,
          easings: cubicBezier(0.17, 0.55, 0.55, 1),
        }}
        initial="hidden"
        animate={mainControl}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Reveal;
