import type { RoomData } from "../guests.types";

export type RoomProps = {
  title?: string;
  room: RoomData;
  showDeleteButton?: boolean;
  onClickDelete?: () => void;
  onChangeAdults?: (value: number) => void;
  onChangeChildren?: (value: number) => void;
  onChangeChildValue?: (value: number, indexChild: number) => void;
};
