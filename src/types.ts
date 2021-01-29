import { RoomStatus } from "enums";
import { ReactElement } from "react";

export interface IColumn<T> {
  name: string;
  value: keyof T;
  isNumeric?: boolean;
  cell?: (item: T) => ReactElement;
}

export interface IRoom {
  name: string;
  status: RoomStatus;
  description?: string;
  price: number;
  maxCapacity: number;
}
