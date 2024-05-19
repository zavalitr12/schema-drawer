import { FC } from "react";
import { LineView } from "./lineView";
import { LineViewPropsType } from "./types";

const withLine =
  (View: FC<LineViewPropsType>) =>
  ({ coords, ...props }: LineViewPropsType) => {
    return <View {...{ coords, ...props }} />;
  };

export const Line = withLine(LineView);
