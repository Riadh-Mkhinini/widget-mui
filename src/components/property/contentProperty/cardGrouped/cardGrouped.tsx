import { type FC } from "react";
import { Typography } from "@mui/material";
//constants
import { Svgs } from "@constants";
//styles
import { Container, Avatar, Column, Row, Item } from "./cardGrouped.styles";
//types
import type { CardGroupedProps } from "./cardGrouped.types";
import type { PropertyItem } from "../../property.types";

const CardGrouped: FC<CardGroupedProps> = (props) => {
  const { item, onClick } = props;

  const onClickItem = (property: PropertyItem) => () => {
    onClick?.(property);
  };

  //render
  return (
    <Container>
      <Row>
        <Svgs.IconMarkerPin01 sx={{ color: "grey.400" }} />
        <Typography
          color="grey.400"
          fontSize={14}
          fontWeight="600"
          textTransform="uppercase"
        >
          {item.country}
        </Typography>
      </Row>
      <Column mt={1} gap={1} paddingX={4}>
        {item.data.map((element, iterator) => {
          return (
            <Column key={iterator}>
              <Typography
                fontSize={14}
                fontWeight="600"
                mb={1}
                textTransform="uppercase"
              >
                {element.city}
              </Typography>
              {element.data.map((property, i) => {
                return (
                  <Item key={i} onClick={onClickItem(property)}>
                    <Avatar alt={property.name} width={24} height={24}>
                      <Typography fontSize={10}>
                        {property.name.substring(0, 2).toUpperCase()}
                      </Typography>
                    </Avatar>
                    <Typography fontSize={14} fontWeight="500">
                      ({property.id}) {property.name}
                    </Typography>
                  </Item>
                );
              })}
            </Column>
          );
        })}
      </Column>
    </Container>
  );
};

export default CardGrouped;
