import { type FC, useMemo, useState } from "react";
import { Button, Divider, Typography } from "@mui/material";
//constants
import { Svgs } from "@constants";
//context
import { useIBE } from "@contextAPI";
//components
import { Popover, Preview } from "../commons";
import Room from "./room/room";
//styles
import { Container, Content, Footer } from "./guests.styles";
//types
import type { GuestsProps, RoomData } from "./guests.types";

const Guests: FC<GuestsProps> = (props) => {
  const { onChange } = props;
  const { localeText, engineConfig, paramsSize } = useIBE();
  //states
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [rooms, setRooms] = useState<Array<RoomData>>(props.rooms);
  //

  const open = Boolean(anchorEl);
  const id = open ? "guests-popover" : undefined;

  const { totalRooms, totalAdults, totalChildren } = useMemo(
    () => ({
      totalRooms: props.rooms.length,
      totalAdults: props.rooms.reduce((sum, room) => sum + room.adultsCount, 0),
      totalChildren: props.rooms.reduce(
        (sum, room) => sum + room.childCount,
        0
      ),
    }),
    [props.rooms]
  );
  //functions
  const onClickOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const onClickAddRoom = () => {
    setRooms((prev) => [
      ...prev,
      { adultsCount: 2, childCount: 0, childs: [] },
    ]);
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

  const onClickDone = () => {
    let valid = true;
    const newRooms = rooms.map((room) => ({
      ...room,
      childs: room.childs.map((child) => {
        if (!child.value) {
          valid = false;
          return {
            ...child,
            error: localeText?.guests?.popUpRequiredField,
          };
        }
        return child;
      }),
    }));

    if (!valid) {
      setRooms(newRooms);
      return;
    }

    setAnchorEl(null);
    onChange?.(rooms);
  };

  //render
  const renderItem = () => {
    return rooms.map((room, index) => {
      return (
        <Room
          key={index}
          title={localeText?.guests?.popUpRoom?.(index + 1)}
          room={room}
          showDeleteButton={rooms.length > 1}
          onChangeAdults={onChangeAdults(index)}
          onChangeChildren={onChangeChildren(index)}
          onChangeChildValue={onChangeChildValue(index)}
          onClickDelete={onClickDeleteRoom(index)}
        />
      );
    });
  };

  return (
    <>
      <Preview
        type="simple"
        id={id}
        open={open}
        label={localeText?.guests?.previewLabel}
        value={localeText?.guests?.previewValue?.(
          totalRooms,
          totalAdults,
          totalChildren
        )}
        showIconSelect={false}
        icon={
          <Svgs.IconUserGroup03
            sx={{
              fontSize: paramsSize.sizeIcon,
              color: engineConfig?.global?.preview?.icon || "primary.main",
            }}
          />
        }
        layout={engineConfig?.global?.layout}
        onClickOpen={onClickOpen}
      />
      <Popover
        mode={engineConfig?.guests?.popUpMode}
        maxWidth="xs"
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        marginThreshold={0}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Container divider={<Divider />}>
          <Typography p={2} fontSize={16} fontWeight="700">
            {localeText?.guests?.popUpTitle}
          </Typography>
          <Content>{renderItem()}</Content>
          <Footer>
            <Button
              variant="outlined"
              fullWidth
              sx={{ textTransform: "none" }}
              disabled={engineConfig?.guests?.maxRoom === rooms.length}
              onClick={onClickAddRoom}
            >
              {localeText?.guests?.popUpButtonAddRoom}
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              variant="contained"
              fullWidth
              onClick={onClickDone}
            >
              {localeText?.guests?.popUpButtonDone}
            </Button>
          </Footer>
        </Container>
      </Popover>
    </>
  );
};

export { Guests, type RoomData };
