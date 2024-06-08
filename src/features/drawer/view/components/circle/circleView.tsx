import { CircleViewPropsType } from "./types";

export const Circle = ({
  coords,
  radius,
  onMouseDown,
}: CircleViewPropsType) => {
  return (
    <g style={{ cursor: "pointer" }} onMouseDown={onMouseDown as any}>
      <circle cx={coords.x} cy={coords.y} r={radius}></circle>
    </g>
  );
};
