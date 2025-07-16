export type GuestsProps = {
  rooms: Array<RoomData>;
  onChange?: (rooms: Array<RoomData>) => void;
};

export type RoomData = {
  adultsCount: number;
  childCount: number;
  childs: Array<{ value: number | null; error?: string }>;
};
