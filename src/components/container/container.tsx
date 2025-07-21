import { type FC, useMemo } from "react";
import { useTheme } from "@mui/material";
//contextAPI
import { useIBE } from "@contextAPI";
//styles
import { Main } from "./container.styles";
//types
import type { ContainerProps } from "./container.types";

const Container: FC<ContainerProps> = (props) => {
  const theme = useTheme();
  const { engineConfig, size } = useIBE();

  const padding = useMemo(
    () =>
      typeof engineConfig?.global?.container?.padding === "number"
        ? engineConfig?.global?.container?.padding
        : 0,
    [engineConfig?.global?.container?.padding]
  );
  const borderRadius = useMemo(
    () => engineConfig?.global?.container?.borderRadius || 0,
    [engineConfig?.global?.container?.borderRadius]
  );

  return (
    <Main
      maxWidth={theme.breakpoints.values[size]}
      background={engineConfig?.global?.container?.background}
      backdropfilter={engineConfig?.global?.container?.backdropFilter}
      borderRadius={borderRadius}
      padding={padding}
    >
      {props.children}
    </Main>
  );
};

export { Container };
