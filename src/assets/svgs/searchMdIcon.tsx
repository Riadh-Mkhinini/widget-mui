function SearchMdIcon({
  stroke = "#000",
  width = 24,
  height = 24,
  margin,
}: {
  stroke?: string;
  width?: string | number;
  height?: string | number;
  margin?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      style={{ margin }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SearchMdIcon;
