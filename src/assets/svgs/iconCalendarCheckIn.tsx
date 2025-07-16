import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconCalendarCheckIn = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "1.875"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 2v4m-8-4v4M21.5 16v-4c0-3.771 0-5.657-1.172-6.828S17.271 4 13.5 4h-2C7.729 4 5.843 4 4.672 5.172S3.5 8.229 3.5 12v2c0 3.771 0 5.657 1.172 6.828S7.729 22 11.5 22h1M3.5 10h18"
      ></path>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "1.875"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.5 19.5H15m2 2.5c-.506-.491-2.5-1.8-2.5-2.5s1.994-2.009 2.5-2.5"
      ></path>
    </SvgIcon>
  );
};
export default IconCalendarCheckIn;
