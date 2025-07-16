import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconHotel = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "1.5"}
        strokeLinecap="round"
        d="M2 22.5h20"
      ></path>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "1.5"}
        strokeLinejoin="round"
        d="M18 9.5h-4c-2.482 0-3 .518-3 3v10h10v-10c0-2.482-.518-3-3-3Z"
      ></path>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "1.5"}
        strokeLinejoin="round"
        d="M15 22.5H3v-17c0-2.482.518-3 3-3h6c2.482 0 3 .518 3 3v4"
      ></path>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "1.5"}
        strokeLinecap="round"
        d="M3 6.5h3m-3 4h3m-3 4h3M15 13.5h2m-2 3h2"
      ></path>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "1.5"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 22.5v-3"
      ></path>
    </SvgIcon>
  );
};
export default IconHotel;
