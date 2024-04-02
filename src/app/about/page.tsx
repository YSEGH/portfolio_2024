import React from "react";
import styles from "./page.module.css";
import ListTestimony from "@/components/ListTestimony/ListTestimony";

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className={styles["page-about"]}>
      <h2>Lorem est auctor neque nec urna. Nam pretium turpis et arcu.</h2>
      <h3>
        The view has been identified as the one from his bedroom window, facing
        east, a view which Van Gogh painted variations of no fewer than
        twenty-one times, including The Starry Night.{" "}
      </h3>
      <ListTestimony />
    </div>
  );
};

export default AboutPage;
