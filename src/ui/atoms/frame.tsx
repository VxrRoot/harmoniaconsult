import React from "react";
import styles from "./frame.module.css";

const Frame = () => {
  return (
    <div
      className={`${styles.frame} bg-gradient-to-r from-yellow-600 to-yellow-900`}
    ></div>
  );
};

export default Frame;
