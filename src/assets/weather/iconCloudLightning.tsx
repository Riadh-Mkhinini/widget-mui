import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconCloudLightning = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? 2}
      />
      <path
        d="m13 12-3 5h4l-3 5"
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? 2}
      />
    </SvgIcon>
  );
};

export default IconCloudLightning;
