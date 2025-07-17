import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconTrash = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M9 3.5h6m-12 3h18m-2 0-.701 10.52c-.105 1.578-.158 2.367-.499 2.965a3 3 0 0 1-1.298 1.215c-.62.3-1.41.3-2.993.3h-3.018c-1.582 0-2.373 0-2.993-.3A3 3 0 0 1 6.2 19.985c-.34-.598-.394-1.387-.499-2.966L5 6.5m5 4.5v5m4-5v5"
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
export default IconTrash;
