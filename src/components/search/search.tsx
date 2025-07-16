import { type FC, useMemo } from "react";
//constants
import { Svgs } from "@constants";
//contextAPI
import { useIBE } from "@contextAPI";
//styles
import { ContainerIcon, Button, Typography } from "./search.styles";
//types
//types
import type { SearchProps } from "./search.types";

const Search: FC<SearchProps> = (props) => {
  const { sx, onClick } = props;
  const { localeText, paramsSize, engineConfig, size } = useIBE();

  const borderRadius = useMemo(
    () =>
      engineConfig?.global?.layout === "combined"
        ? 0
        : engineConfig?.global?.preview?.radius,
    [engineConfig?.global?.layout, engineConfig?.global?.preview?.radius]
  );

  return (
    <Button
      sx={sx}
      width={paramsSize.heightContent}
      height={paramsSize.heightContent}
      radius={borderRadius}
      mode={engineConfig?.search?.mode}
      onClick={onClick}
    >
      {engineConfig?.search?.showIcon && (
        <ContainerIcon>
          <Svgs.IconSearchMd sx={{ color: "primary.contrastText" }} />
        </ContainerIcon>
      )}
      <Typography size={size} mode={engineConfig?.search?.mode}>
        {localeText?.searchLabel}
      </Typography>
    </Button>
  );
};

export { Search };
