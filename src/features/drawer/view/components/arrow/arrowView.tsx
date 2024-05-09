import { Point } from "features/drawer/view/components/point/pointView";
import { Line } from "features/drawer/view/components/line/lineHoc";
import { FC } from "react";
import { ArrowViewPropsType } from "./types";

export const ArrowView: FC<ArrowViewPropsType> = ({
  firstPoint,
  secondPoint,
  handlePointMouseDown,
}) => {
  return (
    <g>
      <Line {...{ firstPoint, secondPoint }} />
      <Point
        handlePointMouseDown={() => handlePointMouseDown("left")}
        coords={firstPoint}
      />
      <Point
        handlePointMouseDown={() => handlePointMouseDown("right")}
        coords={secondPoint}
      />
    </g>
  );
};
