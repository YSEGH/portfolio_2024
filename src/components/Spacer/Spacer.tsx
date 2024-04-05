import React from "react";
import styles from "./Spacer.module.css";

type Props = {
  withHr?: boolean;
  size: 12 | 24 | 36 | 48;
};

const Spacer: React.FC<Props> = ({ withHr = false, size }: Props) => {
  return (
    <div className={styles["spacer"]} style={{ height: size, width: "100%" }}>
      {withHr && <hr />}
    </div>
  );
};

export default Spacer;
