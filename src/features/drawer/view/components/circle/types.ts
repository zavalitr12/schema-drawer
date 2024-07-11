import { CoordsType } from "../../types";

export type CircleViewPropsType = {
  onMouseDown: Function;
  coords: Omit<CoordsType, "id"> & { id?: string };
  radius: number;
};
