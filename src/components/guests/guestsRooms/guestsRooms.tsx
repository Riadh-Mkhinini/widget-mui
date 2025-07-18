import { type FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Divider, Typography } from "@mui/material";
//components
import Room from "./room/room";
//styles
import { Container, Content, Footer } from "./guestsRooms.styles";
//types
import type { GuestsRoomsProps } from "./guestsRooms.types";
import type { RoomData } from "../guests.types";

const GuestsRooms: FC<GuestsRoomsProps> = (props) => {
  const { config, onComplete } = props;
  const { t } = useTranslation();
  //states
  const [rooms, setRooms] = useState<Array<RoomData>>(props.rooms);
  const [indexExpanded, setIndexExpanded] = useState<number>(0);

  //functions
  const onClickAddRoom = () => {
    setRooms((prev) => [
      ...prev,
      { adultsCount: 2, childCount: 0, childs: [] },
    ]);
    setIndexExpanded(rooms.length);
  };
  const onChangeAdults = (index: number) => (value: number) => {
    setRooms((prev) => [
      ...prev.map((room, iterator) => ({
        ...room,
        adultsCount: index === iterator ? value : room.adultsCount,
      })),
    ]);
  };
  const onChangeChildren = (index: number) => (value: number) => {
    setRooms((prev) => [
      ...prev.map((room, iterator) => ({
        ...room,
        childCount: index === iterator ? value : room.childCount,
        childs:
          index === iterator && value < room.childCount
            ? room.childs.filter((_, i) => i + 1 !== room.childs.length)
            : [...room.childs, { value: null }],
      })),
    ]);
  };
  const onChangeChildValue =
    (index: number) => (value: number, indexChild: number) => {
      setRooms((prev) => [
        ...prev.map((room, iterator) => ({
          ...room,
          childs:
            index === iterator
              ? room.childs.map((o, i) => ({
                  ...o,
                  value: i === indexChild ? value : o.value,
                  error: undefined,
                }))
              : room.childs,
        })),
      ]);
    };

  const onClickDeleteRoom = (index: number) => () => {
    setRooms((prev) => prev.filter((_, iterator) => iterator !== index));
  };

  const onChangeExpanded = (index: number) => () => {
    setIndexExpanded((prev) => (prev === index ? -1 : index));
  };

  const onClickDone = () => {
    let valid = true;
    const newRooms = rooms.map((room) => ({
      ...room,
      childs: room.childs.map((child) => {
        if (!child.value) {
          valid = false;
          return {
            ...child,
            error: t("guests.pop_up_required_field"),
          };
        }
        return child;
      }),
    }));

    if (!valid) {
      setRooms(newRooms);
      return;
    }
    onComplete?.(rooms);
  };

  //render
  const renderItem = () => {
    return rooms.map((room, index) => {
      return (
        <Room
          key={index}
          config={config}
          title={t("guests.pop_up_room", { value: index + 1 })}
          room={room}
          showDeleteButton={rooms.length > 1}
          expanded={index === indexExpanded}
          onChangeAdults={onChangeAdults(index)}
          onChangeChildren={onChangeChildren(index)}
          onChangeChildValue={onChangeChildValue(index)}
          onClickDelete={onClickDeleteRoom(index)}
          onChangeExpanded={onChangeExpanded(index)}
        />
      );
    });
  };

  return (
    <Container divider={<Divider />}>
      <Typography p={2} fontSize={16} fontWeight="700">
        {t("guests.pop_up_title")}
      </Typography>
      <Content>{renderItem()}</Content>
      <Footer>
        <Button
          variant="outlined"
          fullWidth
          sx={{ textTransform: "none" }}
          disabled={config?.maxRoom === rooms.length}
          onClick={onClickAddRoom}
        >
          <Typography variant="inherit" noWrap>
            {t("guests.pop_up_button_add_room")}
          </Typography>
        </Button>
        <Button
          sx={{ textTransform: "none" }}
          variant="contained"
          fullWidth
          onClick={onClickDone}
        >
          <Typography variant="inherit" noWrap>
            {t("guests.pop_up_button_done")}
          </Typography>
        </Button>
      </Footer>
    </Container>
  );
};

export { GuestsRooms };
