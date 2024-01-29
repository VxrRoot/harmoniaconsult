import React from "react";
import styles from "./frame.module.css";

const Frame = () => {
  return (
    <div
      className={`${styles.frame} ${styles.gradient_bg} bg-gradient-to-r from-yellow-600 to-yellow-900 animate-gradient-animate`}
    ></div>
  );
};

export default Frame;
