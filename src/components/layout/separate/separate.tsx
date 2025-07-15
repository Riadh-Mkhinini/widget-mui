import { type FC } from "react";
//contextAPI
import { useIBE } from "@contextAPI";
//styles
import { Grid } from "./separate.styles";
//types
import type { LayoutProps } from "../layout.types";

const Separate: FC<LayoutProps> = (props) => {
  const { children } = props;
  const { engineConfig, size } = useIBE();

  return (
    <Grid
      showProperty={engineConfig?.property?.showProperty}
      showPromoCode={engineConfig?.promoCode?.showPromoCode}
      size={size}
    >
      {children}
    </Grid>
  );
};

export default Separate;
