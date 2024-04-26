import { DrawerView } from "./drawerView";
import { useSchema } from "../../hooks/useSchema";

const withDrawer = (View: any) => () => {
  const { schema, updateSchemaInfo, updateFigure } = useSchema();

  return <View schema={schema} updateSchemaInfo={updateSchemaInfo} updateFigure={updateFigure} />;
};

export const Drawer = withDrawer(DrawerView);

/**
 * figure types: line, circle, square, custom
 * 
 * update line:
 *    move one of the ends
 *    move center
 * 
 * onMouseMove(event, dot1) {
 *    controller.moveFigure(state.figure.type, movementType, state.figure.type)
 * }
 * 
 * onMouseUp() {
 *    updateFigure(state.figure.type, movementType, state.figure.type)
 * }
 * 
 * update circle:
 *    move center
 *    change radius
 * 
 * square
 *    move center
 *    move one of the ends to change size
 */