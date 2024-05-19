export type CoordsType = {
  id: string;
  x: number;
  y: number;
};

export type FigureKindType = "line" | "circle";

export type StyleType = {};

export type ActionDirectionType =
  | "free"
  | "vertical"
  | "horizontal"
  | "diagonal"
  | "negativeDiagonal"
  | "circle";

export type ActionType = {
  id: string;
  coordsInfo: { id: string; type: ActionDirectionType }[];
  coords: Omit<CoordsType, "id">;
};

export type FigureType = {
  id: string;
  figures: (CircleType | LineType)[];
  actions: ActionType[];
  style: StyleType;
};

export type CircleType = {
  id: string;
  style: StyleType;
  type: "circle";
  actions: ActionType[];
  radius: number;
  coords: CoordsType[];
};

export type LineType = {
  id: string;
  style: StyleType;
  type: "line";
  actions: ActionType[];
  coords: CoordsType[];
};

export type SchemaInfoType = {};

export type Schema = {
  info: SchemaInfoType;
  figures: FigureType[];
};
