import { Action } from "./action";
import { Coords } from "./coords";
import { Style } from "./style";

export interface Circle {
  id: string;
  style: Style;
  type: "circle";
  actions: Action[];
  radius: number;
  coords: Coords[];
}
