export const Point = ({ handlePointMouseDown, coords }: any) => {
  return (
    <g
      onMouseDown={handlePointMouseDown}
      style={{ cursor: "pointer" }}
    >
      <circle cx={coords.x} cy={coords.y} r="5"></circle>
    </g>
  );
};
