import { FC, Fragment } from "react";
import { Circle } from "../circle/circleView";
import { FigureViewPropsType } from "./types";
import { Line } from "../line/lineHoc";

export const FigureView: FC<FigureViewPropsType> = ({
  figure,
  onMouseDown,
}) => (
  <g>
    {figure.figures.map((figure) => {
      return (
        <Fragment key={figure.id}>
          {figure.type === "circle" && (
            <Circle {...(figure as any)} onMouseDown={onMouseDown} />
          )}
          {figure.type === "line" && (
            <Line {...(figure as any)} onMouseDown={onMouseDown} />
          )}
        </Fragment>
      );
    })}
    {figure.actions.map((action) => (
      <Circle
        key={action.id}
        coords={action.coords}
        radius={5}
        onMouseDown={() => onMouseDown(action)}
      />
    ))}
  </g>
);
