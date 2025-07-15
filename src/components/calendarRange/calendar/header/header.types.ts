import type { Locale } from "date-fns";

export type HeaderProps = {
  disabledPrevious?: boolean;
  disabledNext?: boolean;
  locale?: Locale;
  onClickPrevious?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onClickNext?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
