import React, { RefObject, useEffect } from "react";
import styles from "./ScrollBar.module.css";
import { motion, useScroll } from "framer-motion";

type Props = {
  container: RefObject<HTMLElement>;
  background: string;
};

const ScrollBar = ({ container, background }: Props) => {
  const { scrollYProgress } = useScroll({ container: container });

  useEffect(() => {
    console.log(scrollYProgress);

    return () => {};
  }, [scrollYProgress]);

  return (
    <motion.div
      className={styles["scroll-bar"]}
      style={{ backgroundColor: background }}
    >
      <motion.div
        className={styles["progress-bar"]}
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
    </motion.div>
  );
};

export default ScrollBar;
