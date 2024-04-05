"use client";

import React, { useRef } from "react";
import styles from "./page.module.css";
import ListTestimony from "@/components/ListTestimony/ListTestimony";
import cx from "classnames";
import ScrollBar from "@/components/ScrollBar/ScrollBar";

type Props = {};

const AboutPage = ({}: Props) => {
  const containerRef = useRef(null);

  return (
    <div className={cx("page", styles["page-about"])} ref={containerRef}>
      <ScrollBar container={containerRef} background={"var(--white)"} />

      <div className={styles["content"]}>
        <h2>Lorem est auctor neque nec urna. Nam pretium turpis et arcu.</h2>
        <h3>
          The view has been identified as the one from his bedroom window,
          facing east, a view which Van Gogh painted variations of no fewer than
          twenty-one times, including The Starry Night.
        </h3>
        <h2>Lorem est auctor neque.</h2>
        <ListTestimony />
        <h2>Lorem est auctor neque.</h2>
        <h3>
          The view has been identified as the one from his bedroom window,
          facing east, a view which Van Gogh painted variations of no fewer. The
          view has been identified as the one from his bedroom window, facing
          east, a view which Van Gogh painted variations of no fewer than
          twenty-one times, including The Starry Night.
        </h3>
      </div>
    </div>
  );
};

export default AboutPage;
