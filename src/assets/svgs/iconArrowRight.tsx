import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconArrowRight = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m0 0-7-7m7 7-7 7"
      ></path>
    </SvgIcon>
  );
};
export default IconArrowRight;
