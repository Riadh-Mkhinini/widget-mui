import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconCalendarCheckOut = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "1.76"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.78 2v4m-8-4v4M21.78 15v-3c0-3.771 0-5.657-1.171-6.828S17.552 4 13.78 4h-2C8.01 4 6.125 4 4.953 5.172 3.781 6.343 3.781 8.229 3.781 12v2c0 3.771 0 5.657 1.171 6.828S8.01 22 11.781 22h1M3.78 10h18M19.28 22c.506-.491 2.5-1.8 2.5-2.5s-1.994-2.009-2.5-2.5m2 2.5h-6.5"
      ></path>
    </SvgIcon>
  );
};
export default IconCalendarCheckOut;
