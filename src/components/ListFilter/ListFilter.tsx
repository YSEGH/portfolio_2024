import React from "react";
import styles from "./ListFilter.module.css";
import Filter from "../Filter/Filter";

type Props = {
  activeFilters: string[];
  setFilters: (x: string) => void;
};

const ListFilter: React.FC<Props> = ({ setFilters, activeFilters }: Props) => {
  return (
    <div className={styles["list-filter"]}>
      <div className={styles["list-wrapper"]}>
        {filters.map((filter: string, i: number) => (
          <Filter
            isActive={activeFilters.some((x) => x === filter)}
            key={`${i}-${filter}`}
            title={filter}
            setFilters={setFilters}
          />
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
