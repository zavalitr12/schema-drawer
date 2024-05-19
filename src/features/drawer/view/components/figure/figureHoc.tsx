import { FC } from "react";
import { FigureView } from "./figureView";
import { FigureHocPropsType, FigureViewPropsType } from "./types";
import { Action } from "features/drawer/domain/model/action";
import { useSchemaContext } from "../../providers/schemaProvider";

const withFigure =
  (View: FC<FigureViewPropsType>) =>
  ({ figure }: FigureHocPropsType) => {
    const { updateFigureCoords } = useSchemaContext();

    const handlePointMouseDown = (action: Action) => {
      const handleMouseMove = (event: any) => {
        console.log(figure.figures[0].coords);
        updateFigureCoords(figure.id, action, {
          x: event.pageX,
          y: event.pageY,
        });
      };

      const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    return <View figure={figure} onMouseDown={handlePointMouseDown} />;
  };

export const Figure = withFigure(FigureView);
