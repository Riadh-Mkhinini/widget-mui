import type { FC } from "react";
//contextAPI
import { useIBE } from "@contextAPI";
//components
import GridItem from "./gridItem/gridItem";
import Separate from "./separate/separate";
import Combined from "./combined/combined";
//types
import type { LayoutProps } from "./layout.types";

const Layout: FC<LayoutProps> = (props) => {
  const { engineConfig } = useIBE();

  if (engineConfig?.global?.layout === "combined") {
    return <Combined {...props} />;
  }
  return <Separate {...props} />;
};

export { Layout, GridItem };
