import { Dot, Vector } from "features/drawer/domain/model";

export interface Line {
  dot1: Dot;
  dot2: Dot;
}

export function move(line: Line, vector: Vector): Line {
  return {
    dot1: { x: line.dot1.x + vector.x, y: line.dot1.y + vector.y },
    dot2: { x: line.dot2.x + vector.x, y: line.dot2.y + vector.y },
  };
}
