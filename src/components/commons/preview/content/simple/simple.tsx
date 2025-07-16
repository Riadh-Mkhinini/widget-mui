import { type FC, useMemo } from "react";
import { Stack, Typography } from "@mui/material";
//svgs
import { Svgs } from "@constants";
//contextAPI
import { useIBE } from "@contextAPI";
//styles
import { Container, ContainerIcon } from "./simple.styles";
//types
import type { SimpleProps } from "./simple.types";

const Simple: FC<SimpleProps> = (props) => {
  const {
    open,
    icon,
    showIconSelect = true,
    sizes,
    label,
    placeholder,
    value,
  } = props;

  const { engineConfig, paramsSize } = useIBE();

  const params = useMemo(() => sizes || paramsSize, [sizes, paramsSize]);
  const text = useMemo(() => value || placeholder || "", [value, placeholder]);

  const color = useMemo(() => {
    if (value) return engineConfig?.global?.preview?.value || "grey.900";
    return engineConfig?.global?.preview?.placeholder || "grey.500";
  }, [engineConfig?.global?.preview, value]);

  return (
    <Container>
      {engineConfig?.global?.preview?.showIcon && icon}
      <Stack flex={1}>
        {label && (
          <Typography
            textAlign="start"
            fontSize={params.fontSizeLabel}
            color={engineConfig?.global?.preview?.label || "grey.700"}
            noWrap
          >
            {label}
          </Typography>
        )}
        {text && (
          <Typography
            textAlign="start"
            fontSize={params.fontSizeValue}
            fontWeight="500"
            color={color}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
              maxWidth: 180,
            }}
          >
            {text}
          </Typography>
        )}
      </Stack>
      {showIconSelect && (
        <ContainerIcon open={open}>
          <Svgs.IconChevronDown
            sx={{
              fontSize: params.sizeIcon,
              color: engineConfig?.global?.preview?.placeholder || "grey.500",
            }}
          />
        </ContainerIcon>
      )}
    </Container>
  );
};

export default Simple;
