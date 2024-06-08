import { FC } from "react";
import "./style.css";
import { LineViewPropsType } from "./types";

export const LineView: FC<LineViewPropsType> = ({ coords }) => {
  const firstPoint = coords[0];
  const secondPoint = coords[1];
  return (
    <g>
      <g>
        <path
          d={`M ${firstPoint.x} ${firstPoint.y} L ${secondPoint.x} ${secondPoint.y}`}
          stroke="red"
        ></path>
      </g>
    </g>
  );
};
