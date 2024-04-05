import React from "react";
import style from "./style/AnimatedText.module.css";
import cx from "classnames";

type Props = {
  text: string;
  height: number;
  customContainerStyle?: React.CSSProperties;
  customContainerClass?: string;
  customTextStyle?: React.CSSProperties;
  customTextClass?: string;
  duration?: number;
};

const AnimatedText = ({
  text,
  height,
  customContainerStyle,
  customContainerClass,
  customTextStyle,
  customTextClass,
  duration = 0.6,
}: Props) => {
  return (
    <div
      className={cx(customContainerClass, style["animated-text"])}
      style={{ height: height, ...customContainerStyle }}
    >
      <div
        style={{ transition: `${duration}s` }}
        className={style["animated-text-wrapper"]}
      >
        <p
          className={cx(customTextClass, style["text"])}
          style={customTextStyle}
        >
          {text}
        </p>
        <p
          className={cx(customTextClass, style["text"])}
          style={customTextStyle}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;
