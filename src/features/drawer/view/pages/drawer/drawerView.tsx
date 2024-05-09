import "./style.css";

import { ToolsMenu } from "features/drawer/view/components/toolsMenu/toolsMenuHoc";
import { Rectangle } from "features/drawer/view/components/rectangle/rectangleHoc";
import { Arrow } from "../../components/arrow/arrowHoc";

export const DrawerView = ({ schema, updateSchemaInfo, updateFigure }: any) => {
  return (
    schema && (
      <div className="drawer-page">
        <div className="drawer-page__header"></div>
        <div className="drawer-page__left-menu">
          <ToolsMenu />
        </div>
        <div className="drawer-page__draw-space">
          <svg className="drawer-page__draw-space-svg">
            <Arrow />
            <Rectangle />
          </svg>
        </div>
        <div className="drawer-page__right-menu">{/* <StyleMenu /> */}</div>
      </div>
    )
  );
};
