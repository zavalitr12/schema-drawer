import {
  ActionDirectionType,
  ActionType,
  CoordsType,
  FigureType,
} from "../../types";
import { Circle } from "../circle/circleView";
import { Line } from "../line/lineHoc";

export const FigureMap = {
  circle: (props: any) => <Circle {...props} />,
  line: (props: any) => <Line {...props} />,
};

// TODO: refactor code that updates figure
/**
 * may be it can be easier to update only a figure in the state
 */

const findCoordInAction = (
  action: ActionType,
  coord: CoordsType | ActionType
) => action.coordsInfo.find((coordInfo) => coordInfo.id === coord.id);

const updateCoord = (
  coord: ActionType["coords"],
  type: ActionDirectionType,
  { x, y }: { x: number; y: number }
) => {
  if (type === "horizontal") coord.x = x;
  if (type === "vertical") coord.y = y;
  if (type === "free") {
    coord.x = x;
    coord.y = y;
  }

  return coord;
};

// export const updateFigure = (
//   figure: FigureType,
//   action: ActionType,
//   coords: ActionType["coords"]
// ) => {
//   const { x, y } = coords;

//   const updatedBasicFigures = figure.figures.map((basicFigure) => {
//     basicFigure.coords.map((basicFigureCoord) => {
//       const coordInfo = findCoordInAction(action, basicFigureCoord);

//       if (!coordInfo) return basicFigureCoord;

//       return updateCoord(basicFigureCoord, coordInfo.type, { x, y });
//     });

//     return basicFigure;
//   });

//   const updatedActions = figure.actions.map((actionItem) => {
//     const coordInfo = findCoordInAction(action, actionItem);

//     if (!coordInfo) return actionItem;

//     actionItem.coords = updateCoord(actionItem.coords, coordInfo.type, {
//       x,
//       y,
//     });

//     return actionItem;
//   });

//   return {
//     ...figure,
//     figures: updatedBasicFigures,
//     actions: updatedActions,
//   };
// };
