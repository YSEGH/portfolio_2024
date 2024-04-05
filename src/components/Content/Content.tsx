"use client";

import React, { useContext } from "react";
import Nav from "../Nav/Nav";
import cx from "classnames";
import styles from "./Content.module.css";
import { AppContext } from "@/context/AppContext";
import ButtonContrast from "../ButtonContrast/ButtonContrast";
import ScrollBar from "../ScrollBar/ScrollBar";

type Props = { children: React.ReactNode };

const Content: React.FC<Props> = ({ children }: Props) => {
  const {
    setOpen,
    open,
    isMobileClient,
    backgroundColor,
    setBackgroundColor,
    contrast,
    setContrast,
  } = useContext(AppContext);

  if (isMobileClient === null) {
    return null;
  }

  return (
    <main className={cx({ contrast: contrast, mobile: isMobileClient })}>
      <div
        className={cx(styles["content"], styles["banner-content"], {
          [styles["is-open"]]: open,
        })}
      >
        <div className={styles["banner-title"]}>
          <h4 className={styles["title-name"]}>Seghrouchni Youssef</h4>
          <h2 className={styles["title-job"]}>
            Full stack
            <br /> web developer
          </h2>
        </div>
        <ButtonContrast contrast={contrast} setContrast={setContrast} />
        <Nav
          setOpen={setOpen}
          isMobileClient={isMobileClient}
          setBackgroundColor={setBackgroundColor}
        />
      </div>
      <div
        className={cx(styles["content"], styles["page-content"], {
          [styles["is-open"]]: open,
        })}
        style={{ backgroundColor: backgroundColor }}
      >
        {children}
      </div>
    </main>
  );
};

export default Content;
