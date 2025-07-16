import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconChevronDown = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 9l6 6 6-6"
      ></path>
    </SvgIcon>
  );
};
export default IconChevronDown;
