import { FC } from "react";
import { RectangleView } from "./rectangleView";
import { RectangleViewPropsType } from "./types";

const withRectangle = (View: FC<RectangleViewPropsType>) => () => {
  return <View />;
};

export const Rectangle = withRectangle(RectangleView);
