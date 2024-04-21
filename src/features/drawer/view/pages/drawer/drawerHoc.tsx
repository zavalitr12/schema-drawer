import { useEffect, useState } from "react";
import { getSchemaUseCase } from "features/drawer/infra/factory/usecases";
import { DrawerView } from "./drawerView";
import { Schema } from "features/drawer/domain/model";

const withDrawer = (View: any) => () => {
  const [schema, setSchema] = useState<Schema | null>(null);

  useEffect(() => {
    getSchemaUseCase().then((schema) => setSchema(schema));
  }, []);

  return <View schema={schema} />;
};

export const Drawer = withDrawer(DrawerView);
