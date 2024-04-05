import React from "react";
import styles from "./page.module.css";
import ListProject from "@/components/ListProject/ListProject";

type Props = {};

const ProjectsPage = (props: Props) => {
  return (
    <div className={styles["page-projects"]}>
      <div className={styles["content"]}>
        <h2 className={styles["page-title"]}>
          Lorem est auctor neque nec urna. Nam pretium turpis et arcu.
        </h2>
        <ListProject />
      </div>
    </div>
  );
};

export default ProjectsPage;
