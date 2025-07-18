import { type FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
//constants
import { Svgs } from "@constants";
//context
import { useIBE } from "@contextAPI";
//components
import { Popover, Preview } from "../commons";
import { GuestsRooms } from "./guestsRooms/guestsRooms";
//helpers
import { getMessageGuests } from "@helpers";
//types
import type { GuestsProps, RoomData } from "./guests.types";

const Guests: FC<GuestsProps> = (props) => {
  const { onChange } = props;
  const { t } = useTranslation();
  const { engineConfig, paramsSize } = useIBE();
  //states
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
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

  const onComplete = (rooms: Array<RoomData>) => {
    setAnchorEl(null);
    onChange?.(rooms);
  };

  return (
    <>
      <Preview
        type="simple"
        id={id}
        open={open}
        label={t("guests.preview_label")}
        value={getMessageGuests({
          t,
          rooms: totalRooms,
          adults: totalAdults,
          children: totalChildren,
        })}
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
        <GuestsRooms
          config={engineConfig?.guests}
          rooms={props.rooms}
          onComplete={onComplete}
        />
      </Popover>
    </>
  );
};

export { Guests, type RoomData };
