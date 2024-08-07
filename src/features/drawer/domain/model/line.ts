import { Action } from "./action";
import { Coords } from "./coords";
import { Style } from "./style";

export interface Line {
  id: string;
  style: Style;
  type: "line";
  actions: Action[];
  coords: Coords[];
}
