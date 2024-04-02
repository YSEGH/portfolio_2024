import React from "react";
import styles from "./ListFilter.module.css";
import Filter from "../Filter/Filter";

type Props = {};

const ListFilter = ({}: Props) => {
  return (
    <div className={styles["list-filter"]}>
      <div className={styles["list-wrapper"]}>
        {filters.map((filter: string, i: number) => (
          <Filter key={`${i}-${filter}`} title={filter} />
        ))}
      </div>
    </div>
  );
};

export default ListFilter;

const filters: string[] = [
  "React",
  "Drupal",
  "PHP",
  "NextJS",
  "Javascript",
  "NodeJS",
  "PHP",
  "NextJS",
  "Javascript",
  "NodeJS",
];
