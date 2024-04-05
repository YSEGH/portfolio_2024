import React from "react";
import styles from "./Filter.module.css";
import cx from "classnames";

type Props = {
  isActive: boolean;
  title: string;
  setFilters: (x: string) => void;
};
const Filter: React.FC<Props> = ({ isActive, title, setFilters }: Props) => {
  return (
    <button
      className={cx(styles["filter"], { [styles["is-active"]]: isActive })}
      onClick={() => setFilters(title)}
    >
      {title}
    </button>
  );
};

export default Filter;
