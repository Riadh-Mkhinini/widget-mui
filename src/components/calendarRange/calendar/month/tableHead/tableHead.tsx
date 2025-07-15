import type { FC } from "react";
import { Typography, useTheme } from "@mui/material";
import { Head, Row, Column } from "./tableHead.styles";
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
        <Column key={item}>
          <Typography
            fontSize={14}
            fontWeight="600"
            color={color}
            textTransform="capitalize"
          >
            {item}
          </Typography>
        </Column>
      );
    });
  };
  return (
    <Head>
      <Row>{renderItem()}</Row>
    </Head>
  );
};

export default TableHead;
