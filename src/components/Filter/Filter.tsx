import React from "react";
import styles from "./Filter.module.css";

type Props = { title: string };

const Filter: React.FC<Props> = ({ title }: Props) => {
  return <button className={styles["filter"]}>{title}</button>;
};

export default Filter;
