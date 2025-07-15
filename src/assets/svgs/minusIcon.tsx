function MinusIcon({
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
        d="M5 12H19"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default MinusIcon;
