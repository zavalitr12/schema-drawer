import { FC, useState } from "react";
import { ActionType, FigureType } from "../../types";
import { FigureView } from "./figureView";
import { FigureViewPropsType } from "./types";
import { updateFigure } from "./helpers";

const withFigure =
  (View: FC<FigureViewPropsType>) => (props: { figure: FigureType }) => {
    const [figure, setFigure] = useState(props.figure);

    const handlePointMouseDown = (action: ActionType) => {
      const handleMouseMove = (event: any) => {
        const updatedFigure = updateFigure(figure, action, {
          x: event.pageX,
          y: event.pageY,
        });
        setFigure(updatedFigure);
      };

      const cleanUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", cleanUp);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", cleanUp);
    };

    return <View figure={figure} onMouseDown={handlePointMouseDown} />;
  };

export const Figure = withFigure(FigureView);
