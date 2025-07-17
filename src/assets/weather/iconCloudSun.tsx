import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconCloudSun = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? "2"}
        d="M12 2v2"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? "2"}
        d="m4.93 4.93 1.41 1.41"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? "2"}
        d="M20 12h2"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? "2"}
        d="m19.07 4.93-1.41 1.41"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? "2"}
        d="M15.947 12.65a4 4 0 0 0-5.925-4.128"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? "2"}
        d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"
      />
    </SvgIcon>
  );
};
export default IconCloudSun;
