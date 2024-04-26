import { Ellipse } from "./ellipse";
import { Line } from "./line";

export type SchemaId = string;

export interface Schema {
  id: SchemaId;
  name: string;
  figures: (Line | Ellipse)[];
}
