import { Figure } from "./figure";

export interface SchemaInfo {}

export interface Schema {
  info: SchemaInfo;
  figures: Figure[];
}

export const findFigureById = (
  schema: Schema,
  figureId: string
): Figure | undefined =>
  schema.figures.find((figure) => figure.id === figureId);

export const updateFigure = (schema: Schema, newFigure: Figure): Schema => {
  const updatedFigures = schema.figures.map((figure) => {
    if (figure.id === newFigure.id) return newFigure;
    return figure;
  });

  return { ...schema, figures: updatedFigures };
};
