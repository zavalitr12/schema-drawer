import { ToolsMenuView } from "./toolsMenuView";

const withToolsMenu = (View: any) => (props: any) => {
  return <View {...props} />;
};

export const ToolsMenu = withToolsMenu(ToolsMenuView);
