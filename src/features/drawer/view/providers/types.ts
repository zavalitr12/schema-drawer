import { Action } from "features/drawer/domain/model/action";
import { Schema } from "../types";
import { Coords } from "features/drawer/domain/model/coords";

export type SchemaContextType = {
  schema: Schema | undefined;
  updateFigureCoords: (
    figureId: string,
    actionType: Action,
    newCoord: Omit<Coords, "id">
  ) => void;
  updateFigureStyle: (figureId: string, newStyles: any) => void;
  updateSchemaInfo: (schemaId: string, schemaInfo: any) => void;
};
