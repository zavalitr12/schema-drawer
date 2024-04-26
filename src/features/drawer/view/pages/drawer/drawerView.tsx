import { Line } from "../../components/line/lineHoc";
import "./style.css";

import { ToolsMenu } from "features/drawer/view/components/toolsMenu/toolsMenuHoc";

export const DrawerView = ({ schema, updateSchemaInfo, updateFigure }: any) => {
  return (
    schema && (
      <div className="drawer-page">
        <div className="drawer-page__header">
          {/* <h1>{schema.name}</h1>
          <input value={schema.name} onChange={(e) => updateSchemaInfo("name", e)} /> */}
          {/* <Header /> */}
        </div>
        <div className="drawer-page__left-menu">
          <ToolsMenu />
        </div>
        <div className="drawer-page__draw-space">
          <Line />
        </div>
        <div className="drawer-page__right-menu">{/* <StyleMenu /> */}</div>
        {/* {schema?.figures.map((figure: any, index: number) => (
          <div
            onClick={(e) => updateFigure(figure, e)}
            key={index}
            style={{
              position: "absolute",
              width: "30px",
              height: "30px",
              backgroundColor: figure.color ? figure.color : "black",
              margin: "5px",
              top: figure.dot1.y,
              left: figure.dot1.x
            }}
          ></div>
        ))} */}
      </div>
    )
  );
};
