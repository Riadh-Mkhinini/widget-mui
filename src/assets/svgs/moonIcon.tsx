function MoonIcon({
  width = 24,
  height = 24,
  fill = "#000",
}: {
  width?: string | number;
  height?: string | number;
  stroke?: string;
  fill?: string;
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
        d="M19.516 16.282c-3.925.75-7.55-2.26-7.55-6.258 0-2.3 1.23-4.407 3.217-5.541 1.006-.575.753-2.104-.39-2.316-.6-.111-1.21-.167-1.821-.167C7.466 2 3 6.474 3 12c0 5.52 4.462 10 9.972 10a9.943 9.943 0 007.745-3.703c.734-.907-.066-2.232-1.2-2.015zm-6.544 4.468c-4.82 0-8.726-3.918-8.726-8.75s3.907-8.75 8.726-8.75c.544 0 1.077.05 1.594.146a7.622 7.622 0 00-3.846 6.628c0 4.79 4.348 8.38 9.03 7.486a8.699 8.699 0 01-6.778 3.24z"
      ></path>
    </svg>
  );
}

export default MoonIcon;
