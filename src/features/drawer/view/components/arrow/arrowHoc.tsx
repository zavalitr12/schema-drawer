import { FC, useState } from "react";
import { ArrowView } from "./arrowView";
import { ArrowViewPropsType, PointAliasType } from "./types";

export const withArrow = (View: FC<ArrowViewPropsType>) => () => {
// TODO: add useSchema controller
  const firstPoint = {
    x: 100,
    y: 200,
  };

  const secondPoint = {
    x: 150,
    y: 300,
  };
  const [firstPointCoords, setFirstPointCoords] = useState(firstPoint);
  const [secondPointCoords, setSecondPointCoords] = useState(secondPoint);

  const handlePointMouseDown = (pointType: PointAliasType) => {
    const handleMouseMove = (event: any) => {
      if (pointType === "left") {
        setFirstPointCoords({ x: event.pageX, y: event.pageY });
      } else {
        setSecondPointCoords({ x: event.pageX, y: event.pageY });
      }
    };

    const cleanUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", cleanUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", cleanUp);
  };

  return (
    <View
      firstPoint={firstPointCoords}
      secondPoint={secondPointCoords}
      handlePointMouseDown={handlePointMouseDown}
    />
  );
};

export const Arrow = withArrow(ArrowView);
