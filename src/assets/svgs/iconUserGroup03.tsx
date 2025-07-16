import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const IconUserGroup03 = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        stroke={props.stroke ?? "currentColor"}
        fill={props.fill ?? "none"}
        strokeWidth={props.strokeWidth ?? "1.6"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M16.5 4a3 3 0 0 1 1.218 5.742M14.214 14h-3.428A4.286 4.286 0 0 0 6.5 18.286c0 .947.768 1.714 1.714 1.714h8.572c.947 0 1.714-.767 1.714-1.714A4.286 4.286 0 0 0 14.214 14M18.215 13a4.286 4.286 0 0 1 4.285 4.286c0 .947-.767 1.714-1.714 1.714M8.5 4a3 3 0 0 0-1.218 5.742M4.214 19A1.714 1.714 0 0 1 2.5 17.286 4.286 4.286 0 0 1 6.786 13"
      ></path>
    </SvgIcon>
  );
};
export default IconUserGroup03;
