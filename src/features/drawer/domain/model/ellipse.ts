import { BaseFigure } from "./baseFigure";
import { Dot } from "./dot";

export interface Ellipse extends BaseFigure {
  dot: Dot;
  r1: number;
  r2: number;
}
