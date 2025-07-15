function GuestsIcon({
  fill = "#000",
  width = 24,
  height = 24,
}: {
  fill?: string;
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
        fill={fill}
        d="M12 1.5a5.253 5.253 0 015.25 5.25A5.253 5.253 0 0112 12a5.253 5.253 0 01-5.25-5.25A5.253 5.253 0 0112 1.5zm6 15c2.48 0 4.5 2.02 4.5 4.5v1.5h-21V21c0-2.48 2.02-4.5 4.5-4.5 3.984 0 3.155.75 6 .75 2.855 0 2.01-.75 6-.75zM12 0a6.752 6.752 0 00-6.75 6.75A6.752 6.752 0 0012 13.5a6.752 6.752 0 006.75-6.75A6.752 6.752 0 0012 0zm6 15c-4.331 0-3.328.75-6 .75-2.662 0-1.673-.75-6-.75a6 6 0 00-6 6v1.5c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5V21a6 6 0 00-6-6z"
      ></path>
    </svg>
  );
}

export default GuestsIcon;
