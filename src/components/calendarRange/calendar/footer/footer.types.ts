import type { Texts } from "../calendar.types";

export type FooterProps = {
  texts?: Texts;
  dayHovered?: Date | null;
  hoverList?: Array<string>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
