function ArrowNarrowLeftIcon({
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
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 12H4m0 0l6 6m-6-6l6-6"
      ></path>
    </svg>
  );
}

export default ArrowNarrowLeftIcon;
