import React from "react";

function chevronLeftIcon({
  stroke = "black",
  width = 24,
  height = 24,
  style,
}: {
  stroke?: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default chevronLeftIcon;
