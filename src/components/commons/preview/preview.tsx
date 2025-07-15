import { type FC, useMemo } from "react";
import { useTheme } from "@mui/material";
//contextAPI
import { useIBE } from "@contextAPI";
//component
import Content from "./content/content";
//styles
import {
  SeparateContainer,
  CombinedContainer,
  LinkContainer,
} from "./preview.styles";
//types
//types
import type { PreviewProps } from "./preview.types";

const Preview: FC<PreviewProps> = (props) => {
  const {
    id,
    open,
    disabled,
    disabledWithoutColor,
    height,
    background,
    onClickOpen,
    layout,
    sizes,
    sx,
    borderColor,
  } = props;
  const theme = useTheme();
  const { engineConfig, paramsSize } = useIBE();
  const params = useMemo(() => sizes || paramsSize, [sizes, paramsSize]);

  const backgroundDisabled = useMemo(
    () => (disabled ? theme.palette.divider : undefined),
    [disabled, theme.palette.divider]
  );

  if (props.type === "link") {
    return (
      <LinkContainer
        disableRipple
        aria-describedby={id}
        disabled={disabled || disabledWithoutColor}
        onClick={onClickOpen}
        sx={sx}
      >
        <Content {...props} />
      </LinkContainer>
    );
  }
  if (layout === "combined") {
    return (
      <CombinedContainer
        aria-describedby={id}
        disabled={disabled || disabledWithoutColor}
        background={
          backgroundDisabled ||
          background ||
          engineConfig?.global?.preview?.background ||
          theme.palette.background.paper
        }
        height={height || params.heightContent}
        backgroundhover={
          props.type === "button" ? props.hoverButton : undefined
        }
        onClick={onClickOpen}
        sx={sx}
      >
        <Content {...props} />
      </CombinedContainer>
    );
  }
  return (
    <SeparateContainer
      aria-describedby={id}
      disabled={disabled || disabledWithoutColor}
      background={
        backgroundDisabled ||
        background ||
        engineConfig?.global?.preview?.background ||
        theme.palette.background.paper
      }
      bordercolor={borderColor || engineConfig?.global?.preview?.border}
      radius={engineConfig?.global?.preview?.radius}
      height={height || params.heightContent}
      backgroundhover={props.type === "button" ? props.hoverButton : undefined}
      open={open}
      onClick={onClickOpen}
      sx={sx}
    >
      <Content {...props} />
    </SeparateContainer>
  );
};

export { Preview };
