import { FC } from "react";
import { LineViewPropsType } from "../../common/types";
import "./style.css";

export const LineView: FC<LineViewPropsType> = ({
  firstPoint,
  secondPoint,
}) => {
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
