import { type FC } from "react";
import { Typography } from "@mui/material";
//styles
import { Item, Avatar } from "./cardProperty.styles";
//types
import type { CardPropertyProps } from "./cardProperty.types";

const CardProperty: FC<CardPropertyProps> = (props) => {
  const { item, onClick } = props;

  const onClickItem = () => {
    onClick?.(item);
  };

  //render
  return (
    <Item minHeight={80} onClick={onClickItem}>
      <Avatar
        variant="rounded"
        alt={item.name}
        width={66}
        height={66}
        src={item.logoUrl || ""}
      >
        <Typography fontSize={20}>
          {item.name?.substring(0, 2).toUpperCase()}
        </Typography>
      </Avatar>
      <Typography
        className="active"
        flex={1}
        fontSize={14}
        fontWeight="400"
        color="grey.700"
      >
        {item.name}
      </Typography>
    </Item>
  );
};

export default CardProperty;
