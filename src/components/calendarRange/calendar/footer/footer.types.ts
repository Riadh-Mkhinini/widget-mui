export type FooterProps = {
  label?: string;
  dayHovered?: Date | null;
  hoverList?: Array<string>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
