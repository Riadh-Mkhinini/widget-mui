import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconCloud = (props: SvgIconProps) => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
        fill={props.fill ?? "none"}
        stroke={props.stroke ?? "currentColor"}
        strokeWidth={props.strokeWidth ?? 2}
      />
    </SvgIcon>
  );
};

export default IconCloud;
