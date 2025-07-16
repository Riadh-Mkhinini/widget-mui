import type { FC } from "react";
import { Typography } from "@mui/material";
//contextAPI
import { useIBE } from "@contextAPI";
//types
import type { HeaderProps } from "./header.types";

const Header: FC<HeaderProps> = (props) => {
  const { title } = props;
  const { engineConfig } = useIBE();

  //render
  if (!title) return null;
  return (
    <Typography
      fontSize={engineConfig?.global?.title?.fontSize}
      color={engineConfig?.global?.title?.color}
      fontWeight={engineConfig?.global?.title?.fontWeight}
      textAlign={engineConfig?.global?.title?.textAlign}
    >
      {title}
    </Typography>
  );
};

export { Header };
