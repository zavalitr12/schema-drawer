import { Action } from "../model/action";
import { Coords } from "../model/coords";
import { updateCoords } from "../model/figure";
import { Schema, findFigureById, updateFigure } from "../model/schema";

export const moveFigureUseCase = (
  schema: Schema,
  figureId: string,
  actionType: Action,
  newCoords: Omit<Coords, "id">
) => {
  const figure = findFigureById(schema, figureId);

  // TODO figure out the way to create and handle errors
  if (!figure) throw new Error("figure doesn't exist");

  const updatedFigure = updateCoords(figure, actionType, newCoords);

  return updateFigure(schema, updatedFigure);
};
