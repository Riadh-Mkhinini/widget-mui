import { type FC } from "react";
//contextAPI
import { useIBE } from "@contextAPI";
//styles
import { ContainerFixed } from "./gridItem.styles";
//types
import type { GridItemProps } from "./gridItem.types";

const GridItem: FC<GridItemProps> = (props) => {
  const { isVisible = true, children, ...rest } = props;
  const { engineConfig, size } = useIBE();

  if (!isVisible) return null;

  return (
    <ContainerFixed
      component="div"
      layout={engineConfig?.global?.layout}
      size={size}
      {...rest}
    >
      {children}
    </ContainerFixed>
  );
};

export default GridItem;
