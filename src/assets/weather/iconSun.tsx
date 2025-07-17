import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconSun = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <circle
        cx="12"
        cy="12"
        r="4"
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        d="M12 2v2"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        d="M12 20v2"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        d="m4.93 4.93 1.41 1.41"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        d="m17.66 17.66 1.41 1.41"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        d="M2 12h2"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        d="M20 12h2"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        d="m6.34 17.66-1.41 1.41"
      />
      <path
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        d="m19.07 4.93-1.41 1.41"
      />
    </SvgIcon>
  );
};
export default IconSun;
