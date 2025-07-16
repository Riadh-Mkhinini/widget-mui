export type CounterProps = {
  mode?: "rounded" | "circular";
  label?: string | null;
  caption?: string | null;
  value?: number;
  min?: number;
  max?: number;
  direction?: "column" | "row";
  onChange?: (value: number) => void;
};
