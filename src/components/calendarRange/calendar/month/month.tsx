import { type FC } from "react";
import { Typography } from "@mui/material";
//styles
import { Header, Section, Table } from "./month.styles";
//types
//types
import type { MonthProps } from "./month.types";

import TableHead from "./tableHead/tableHead";
import TableBody from "./tableBody/tableBody";

const Month: FC<MonthProps> = (props) => {
  const { month, year, daysList, ...rest } = props;

  //render
  return (
    <Section>
      <Header>
        <Typography
          textAlign="center"
          fontWeight="700"
          fontSize={20}
          color="grey.700"
          textTransform="capitalize"
        >
          {month}
          <Typography
            component="span"
            ml={1}
            fontWeight="400"
            fontSize={20}
            color="grey.700"
          >
            {year}
          </Typography>
        </Typography>
      </Header>
      <Table>
        <TableHead daysList={daysList} />
        <TableBody {...rest} />
      </Table>
    </Section>
  );
};

export default Month;
