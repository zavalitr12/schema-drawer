import "./style.css";

import { ToolsMenu } from "features/drawer/view/components/toolsMenu/toolsMenuHoc";

export const DrawerView = ({schema}: any) => {
  console.log(schema)
  return (
    <div className="drawer-page">
      <div className="drawer-page__header"></div>
      <div className="drawer-page__left-menu">
        <ToolsMenu />
      </div>
      <div className="drawer-page__draw-space">
        {/* <DrawSpace /> */}
      </div>
      <div className="drawer-page__right-menu">
        {/* <StyleMenu /> */}
      </div>
    </div>
  );
};
