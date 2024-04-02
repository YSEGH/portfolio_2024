import React from "react";
import CardTestimony from "../CardTestimony/CardTestimony";
import styles from "./ListTestimony.module.css";

type Props = {};

const ListTestimony = ({}: Props) => {
  return (
    <div className={styles["list-testimony"]}>
      <div className={styles["list-wrapper"]}>
        {testimonies.map((testimony: Testimony, i: number) => (
          <CardTestimony
            key={`${i}-${testimony.style}`}
            style={testimony.style}
            src={testimony.src}
            title={testimony.title}
            content={testimony.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ListTestimony;

const testimonies: Testimony[] = [
  {
    style: "transparent",
    src: "/moi.jpg",
    title: "John DOE",
    content:
      "Praesent ut ligula non mi varius sagittis. Quisque malesuada placerat nisl. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.",
  },
  {
    style: "green",
    src: "/moi.jpg",
    title: "John DOE",
    content:
      "Praesent ut ligula non mi varius sagittis. Quisque malesuada placerat nisl. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.",
  },
  {
    style: "white",
    src: "/moi.jpg",
    title: "John DOE",
    content:
      "Praesent ut ligula non mi varius sagittis. Quisque malesuada placerat nisl. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.",
  },
  {
    style: "green",
    src: "/moi.jpg",
    title: "John DOE",
    content:
      "Praesent ut ligula non mi varius sagittis. Quisque malesuada placerat nisl. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.",
  },
  {
    style: "white",
    src: "/moi.jpg",
    title: "John DOE",
    content:
      "Praesent ut ligula non mi varius sagittis. Quisque malesuada placerat nisl. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam.",
  },
];

export interface Testimony {
  style: "white" | "green" | "transparent";
  src: string;
  title: string;
  content: string;
}
