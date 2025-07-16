import type { ParamsSize } from "@/engine/engine.types";

export type InputProps = {
  icon?: React.ReactNode;
  sizes?: ParamsSize;
  placeholder?: string;
  value?: string | number | null;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
