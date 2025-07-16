import { type FC } from "react";
//components
import Simple from "./simple/simple";
import RangeDate from "./rangeDate/rangeDate";
import Input from "./input/input";
//types
import type { PreviewProps } from "../preview.types";

const Content: FC<PreviewProps> = (props) => {
  if (props.type === "simple") {
    return <Simple {...props} />;
  } else if (props.type === "rangeDate") {
    return <RangeDate {...props} />;
  } else if (props.type === "input") {
    return <Input {...props} />;
  }
  return null;
};

export default Content;
