function XCloseIcon({
  stroke = "#000",
  width = 24,
  height = 24,
  strokeWidth = 2,
}: {
  stroke?: string;
  width?: string | number;
  height?: string | number;
  strokeWidth?: string | number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default XCloseIcon;
