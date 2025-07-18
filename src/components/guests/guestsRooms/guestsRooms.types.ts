import type { GuestsConfig } from "@engine";
import type { RoomData } from "../guests.types";

export type GuestsRoomsProps = {
  config?: GuestsConfig;
  rooms: Array<RoomData>;
  onComplete?: (rooms: Array<RoomData>) => void;
};
