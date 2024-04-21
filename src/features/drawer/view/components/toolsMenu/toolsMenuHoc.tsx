import { ToolsMenuView } from "./toolsMenuView";

const withToolsMenu = (View: any) => () => {
  return <View />;
};

export const ToolsMenu = withToolsMenu(ToolsMenuView);
