import { FC } from "react";
import { LineViewPropsType } from "../../common/types";
import { LineView } from "./lineView";

const withLine =
  (View: FC<LineViewPropsType>) =>
  ({ secondPoint, firstPoint }: LineViewPropsType) => {
    return <View {...{ secondPoint, firstPoint }} />;
  };

export const Line = withLine(LineView);
