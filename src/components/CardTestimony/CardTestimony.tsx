import React from "react";
import styles from "./CardTestimony.module.css";
import Image from "next/image";
import cx from "classnames";

type Props = {
  style: "white" | "green" | "transparent";
  src: string;
  title: string;
  content: string;
};

const CardTestimony: React.FC<Props> = ({
  style,
  src,
  title,
  content,
}: Props) => {
  return (
    <div className={cx(styles["card-testimony"], styles[`style-${style}`])}>
      <div className={styles["card-header"]}>
        <Image
          className={styles["card-img"]}
          src={src}
          alt="testimony"
          width={30}
          height={30}
        />
        <h4 className={styles["card-title"]}>{title}</h4>
      </div>
      <p className={styles["card-content"]}>{content}</p>
    </div>
  );
};

export default CardTestimony;
