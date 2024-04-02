"use client";

import React, { useContext } from "react";
import Nav from "../Nav/Nav";
import cx from "classnames";
import styles from "./Content.module.css";
import { AppContext } from "@/context/AppContext";

type Props = { children: React.ReactNode };

const Content: React.FC<Props> = ({ children }: Props) => {
  const { open, setOpen } = useContext(AppContext);

  return (
    <main>
      <div
        className={cx(styles["content"], styles["banner-content"], {
          [styles["is-open"]]: open,
        })}
      >
        <Nav />
      </div>
      <div
        className={cx(styles["content"], styles["page-content"], {
          [styles["is-open"]]: open,
        })}
      >
        {children}
      </div>
    </main>
  );
};

export default Content;
