import { type FC, useMemo } from "react";
import { useTheme } from "@mui/material";
//contextAPI
import { useIBE } from "@contextAPI";
//component
import Content from "./content/content";
//styles
import { SeparateContainer, CombinedContainer } from "./preview.styles";
//types
//types
import type { PreviewProps } from "./preview.types";

const Preview: FC<PreviewProps> = (props) => {
  const { id, open, height, onClickOpen, layout, sizes, sx, borderColor } =
    props;
  const theme = useTheme();
  const { engineConfig, paramsSize } = useIBE();
  const params = useMemo(() => sizes || paramsSize, [sizes, paramsSize]);

  if (layout === "combined") {
    return (
      <CombinedContainer
        background={
          engineConfig?.global?.preview?.background ||
          theme.palette.background.paper
        }
        height={height || params.heightContent}
        disableRipple={props.type === "input"}
        aria-describedby={id}
        sx={sx}
        onClick={onClickOpen}
      >
        <Content {...props} />
      </CombinedContainer>
    );
  }
  return (
    <SeparateContainer
      background={
        engineConfig?.global?.preview?.background ||
        theme.palette.background.paper
      }
      bordercolor={borderColor || engineConfig?.global?.preview?.border}
      radius={engineConfig?.global?.preview?.radius}
      height={height || params.heightContent}
      disableRipple={props.type === "input"}
      aria-describedby={id}
      open={open}
      sx={sx}
      onClick={onClickOpen}
    >
      <Content {...props} />
    </SeparateContainer>
  );
};

export { Preview };
