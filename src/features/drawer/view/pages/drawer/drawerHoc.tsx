import { DrawerView } from "./drawerView";
import { FC, useContext } from "react";
import { SchemaContext } from "features/drawer/view/providers/schemaProvider";
import { DrawerHocPropsType, DrawerViewPropsType } from "./types";

const withDrawer =
  (View: FC<DrawerViewPropsType>): FC<DrawerHocPropsType> =>
  (props) => {
    const { schema } = useContext(SchemaContext);

    return <View schema={schema} {...props} />;
  };

export const Drawer = withDrawer(DrawerView);
