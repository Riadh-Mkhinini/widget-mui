function HotelIcon({
  stroke = "#000",
  width = 24,
  height = 24,
}: {
  width?: string | number;
  height?: string | number;
  stroke?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M15.958 5.602H8.042V21.5h7.916V5.602z"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M11.208 7.928H9.625V9.48h1.583V7.93zM14.375 7.928h-1.583V9.48h1.583V7.93zM11.208 11.806H9.625v1.551h1.583v-1.55zM14.375 11.806h-1.583v1.551h1.583v-1.55z"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M14.375 16.46h-4.75v5.04h4.75v-5.04z"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M6.063 10.255H4.479v1.551h1.584v-1.55zM6.063 5.602H4.479v1.551h1.584v-1.55z"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M8.042 16.46H4.083v5.04h3.959v-5.04z"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M8.042 21.5H2.5v-19h7.917v3.102"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M17.938 11.03h1.583V9.48h-1.584v1.55zM17.938 7.153h1.583v-1.55h-1.584v1.55z"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M15.958 21.5h3.959v-5.04h-3.959v5.04z"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.2"
        d="M15.958 21.5H21.5v-19h-7.917v3.102"
      ></path>
    </svg>
  );
}

export default HotelIcon;
