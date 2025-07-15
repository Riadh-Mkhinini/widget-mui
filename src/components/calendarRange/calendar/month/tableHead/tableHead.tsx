import type { FC } from "react";
import { Typography, useTheme } from "@mui/material";
import { THead, Tr, Th } from "./tableHead.styles";
import type { TableHeadProps } from "./tableHead.types";

const TableHead: FC<TableHeadProps> = (props) => {
  const { daysList } = props;
  const theme = useTheme();

  //render
  const renderItem = () => {
    return daysList.map((item, index) => {
      const color =
        index === 5 || index === 6
          ? theme.palette.primary.main
          : theme.palette.text.primary;
      return (
        <Th key={item}>
          <Typography
            fontSize={14}
            fontWeight="600"
            color={color}
            textTransform="capitalize"
          >
            {item}
          </Typography>
        </Th>
      );
    });
  };
  return (
    <THead>
      <Tr>{renderItem()}</Tr>
    </THead>
  );
};

export default TableHead;
