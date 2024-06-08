import "./style.css";
import { ToolsMenu } from "features/drawer/view/components/toolsMenu/toolsMenuHoc";
import { FC } from "react";
import { DrawerViewPropsType } from "./types";
import { Figure } from "../../components/figure/figureHoc";

export const DrawerView: FC<DrawerViewPropsType> = ({ schema }) => {
  return (
    schema && (
      <div className="drawer-page">
        <div className="drawer-page__header"></div>
        <div className="drawer-page__left-menu">
          <ToolsMenu />
        </div>
        <div className="drawer-page__draw-space">
          <svg className="drawer-page__draw-space-svg">
            {schema.figures.map((figure) => (
              <Figure key={figure.id} figure={figure} />
            ))}
          </svg>
        </div>
        <div className="drawer-page__right-menu">{/* <StyleMenu /> */}</div>
      </div>
    )
  );
};
