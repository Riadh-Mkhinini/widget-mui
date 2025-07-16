import { type FC } from "react";
//contextAPI
import { useIBE } from "@contextAPI";
//styles
import { Grid } from "./combined.styles";
//types
import type { LayoutProps } from "../layout.types";

const Combined: FC<LayoutProps> = (props) => {
  const { children } = props;
  const { engineConfig, size } = useIBE();

  return (
    <Grid
      size={size}
      showProperty={engineConfig?.property?.showProperty}
      showPromoCode={engineConfig?.promoCode?.showPromoCode}
      isRounded={engineConfig?.global?.preview?.isRounded}
      showShadow={engineConfig?.global?.preview?.showShadow}
      borderWidth={engineConfig?.global?.preview?.borderWidth}
    >
      {children}
    </Grid>
  );
};

export default Combined;
