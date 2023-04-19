import React from "react";

interface Props {
  className: string;
  variant: string;
  width: number | string;
  height: number | string;
}

function Skeleton({
  className = "",
  height = "100%",
  variant = "rounded",
  width = "100%",
}: Props) {
  return (
    <div
      className={`skeleton${variant ? ` skeleton--${variant}` : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ width, height }}
    ></div>
  );
}

export default Skeleton;
