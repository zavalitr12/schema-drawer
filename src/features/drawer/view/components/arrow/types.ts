import { LineViewPropsType } from "../../common/types";

export type PointAliasType = "left" | "right";

export type ArrowViewPropsType = LineViewPropsType & {
  handlePointMouseDown: (pointAlias: PointAliasType) => void;
};
