function ArrowNarrowRightIcon({
  stroke = "#000",
  width = 24,
  height = 24,
}: {
  stroke?: string;
  width?: string | number;
  height?: string | number;
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
        d="M4 12H20M20 12L14 6M20 12L14 18"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowNarrowRightIcon;
