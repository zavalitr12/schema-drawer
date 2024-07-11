import { Action } from "./action";
import { ActionDirectionType } from "./action-direction";
import { Circle } from "./circle";
import { Coords } from "./coords";
import { Line } from "./line";
import { Style } from "./style";

export interface Figure {
  id: string;
  figures: (Line | Circle)[];
  actions: Action[];
  style: Style;
}

const updateCoord = (
  actionDirection: ActionDirectionType,
  oldCoords: Omit<Coords, "id">,
  newCoords: Omit<Coords, "id">
) => {
  const updatedCoord = { ...oldCoords };
  if (actionDirection === "horizontal") updatedCoord.x = newCoords.x;
  if (actionDirection === "vertical") updatedCoord.y = newCoords.y;
  if (actionDirection === "free") {
    updatedCoord.x = newCoords.x;
    updatedCoord.y = newCoords.y;
  }

  return updatedCoord;
};

const findActionTypeByCoordId = (action: Action, id: string) =>
  action.coordsInfo.find((coordInfo) => coordInfo.id === id)?.type;

export const updateCoords = (
  figure: Figure,
  action: Action,
  newCoords: Omit<Coords, "id">
): Figure => {
  const updatedBasicFigures = figure.figures.map((basicFigure) => ({
    ...basicFigure,
    coords: basicFigure.coords.map((coord) => {
      const actionType = findActionTypeByCoordId(action, coord.id);

      if (!actionType) return coord;

      return { id: coord.id, ...updateCoord(actionType, coord, newCoords) };
    }),
  }));

  const updatedActions = figure.actions.map((figureAction) => {
    const actionType = findActionTypeByCoordId(action, figureAction.id);

    if (!actionType) return figureAction;

    return {
      ...figureAction,
      coords: updateCoord(actionType, figureAction.coords, newCoords),
    };
  });

  return { ...figure, actions: updatedActions, figures: updatedBasicFigures };
};

export const updateStyle = (style: Style): Figure => {
  throw new Error("not implemented");
};
