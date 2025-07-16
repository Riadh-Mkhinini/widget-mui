import { type FC, useMemo } from "react";
import { Stack, Typography } from "@mui/material";
//styles
import { Item, Avatar } from "./cardItem.styles";
//types
import type { CardItemProps } from "./cardItem.types";

const CardItem: FC<CardItemProps> = (props) => {
  const {
    item,
    sx,
    sizeImage = 24,
    showAvatar = true,
    urlAvatar,
    getOptionLabel,
    getAvatarLabel,
    getOptionSubLabel,
    onClick,
  } = props;

  const onClickItem = () => {
    onClick?.(item);
  };

  //render
  const label = useMemo(() => getOptionLabel(item), [getOptionLabel, item]);
  const subLabel = useMemo(
    () => (getOptionSubLabel ? getOptionSubLabel(item) : null),
    [getOptionSubLabel, item]
  );
  const textAvatar = useMemo(
    () =>
      getAvatarLabel
        ? getAvatarLabel(item)
        : label.substring(0, 2).toUpperCase(),
    [getAvatarLabel, item, label]
  );
  return (
    <Item sx={sx} onClick={onClickItem}>
      {showAvatar && (
        <Avatar
          alt={label}
          width={sizeImage}
          height={sizeImage}
          src={urlAvatar}
        >
          <Typography fontSize={sizeImage * 0.4}>{textAvatar}</Typography>
        </Avatar>
      )}
      <Stack flex={1}>
        <Typography fontSize={14} fontWeight="500">
          {label}
        </Typography>
        {subLabel && (
          <Typography fontSize={12} fontWeight="400" color="grey.500">
            {subLabel}
          </Typography>
        )}
      </Stack>
    </Item>
  );
};

export default CardItem;
