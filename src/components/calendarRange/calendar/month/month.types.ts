import type { TableBodyProps } from "./tableBody/tableBody.types";
import type { TableHeadProps } from "./tableHead/tableHead.types";

export type MonthProps = TableBodyProps &
  TableHeadProps & {
    month: string;
    year: string;
  };
