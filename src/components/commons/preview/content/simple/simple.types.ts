import type { ParamsSize } from "@/engine/engine.types";

export type SimpleProps = {
  label?: string;
  placeholder?: string;
  value?: string | number | null;
  open?: boolean;
  icon?: React.ReactNode;
  showIconSelect?: boolean;
  sizes?: ParamsSize;
};
