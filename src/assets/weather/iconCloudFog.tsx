import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconCloudFog = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? 2}
      />
      <path
        d="M16 17H7"
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? 2}
      />
      <path
        d="M17 21H9"
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? 2}
      />
    </SvgIcon>
  );
};

export default IconCloudFog;
