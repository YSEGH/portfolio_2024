import Image from "next/image";
import React, { SetStateAction } from "react";
import ContrastImage from "@/../public/Eye_fill.svg";
import styles from "./ButtonContrast.module.css";

type Props = {
  contrast: boolean;
  setContrast: React.Dispatch<SetStateAction<boolean>>;
};

const ButtonContrast = ({ contrast, setContrast }: Props) => {
  return (
    <div className={styles["btn-contrast-wrapper"]}>
      <button
        className={styles["btn-contrast"]}
        onClick={() => setContrast(!contrast)}
      >
        <Image src={ContrastImage} width={20} height={20} alt="contrast" />
      </button>
    </div>
  );
};

export default ButtonContrast;
