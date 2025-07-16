import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconPlus = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5v14m-7-7h14"
      ></path>
    </SvgIcon>
  );
};
export default IconPlus;
