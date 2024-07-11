import { ActionDirectionType } from "./action-direction";
import { Coords } from "./coords";

export interface Action {
  id: string;
  coordsInfo: { id: string; type: ActionDirectionType }[];
  coords: Omit<Coords, "id">;
}
