import React from "react";
import { SkeletonProps } from "./Skeleton.model";
import styles from "./skeleton.module.css";

function Skeleton({
  className = "",
  height = "100%",
  variant = "rounded",
  width = "100%",
}: Partial<SkeletonProps>) {
  return (
    <div
      className={`${styles.skeleton}${variant ? ` styles[variant]` : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ width, height }}
    ></div>
  );
}

export default Skeleton;
