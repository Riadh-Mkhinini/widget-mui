import type { JSX } from "react";
//components
import Default from "./default/default";
import PopUp from "./popUp/popUp";
//types
import type { DataListProps } from "./dataList.types";

function DataList<T>(props: DataListProps<T>): JSX.Element {
  const { mode = "default" } = props;
  //render
  if (mode === "pop-up") {
    return <PopUp {...props} />;
  }
  return <Default {...props} />;
}

export { DataList };
