import React from "react";
import { iconPaths } from "./IconsLib";

interface Props {
  size: number;
  color: string;
  name: string;
  className: string;
  viewBox: string;
  strokeWidth: number;
}

function Icon({
  size = 20,
  color = "primary",
  name,
  className = "",
  strokeWidth = 0,
  viewBox = "",
}: Partial<Props>) {
  return (
    <svg
      className={className ? `icon ${className}` : "icon"}
      viewBox={viewBox ? viewBox : iconPaths[name].viewBox}
      height={`${size}px`}
      width={`${size}px`}
    >
      <path
        fill={`var(--bs-${color})`}
        d={iconPaths[name] ? iconPaths[name].path : ""}
        stroke={`var(--bs-${color})`}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Icon;
