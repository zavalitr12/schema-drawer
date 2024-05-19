import { createContext, FC, ReactNode, useContext } from "react";
import { useSchema } from "features/drawer/view/hooks/useSchema";
import { SchemaContextType } from "./types";

export const SchemaContext = createContext<SchemaContextType>({
  schema: undefined,
  updateFigureCoords: (args?: any) => {},
  updateFigureStyle: (args?: any) => {},
  updateSchemaInfo: (args?: any) => {},
});

export const SchemaProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const { schema, updateFigureCoords, updateFigureStyle, updateSchemaInfo } =
    useSchema();

  return (
    <SchemaContext.Provider
      value={{
        schema,
        updateFigureCoords,
        updateFigureStyle,
        updateSchemaInfo,
      }}
    >
      {children}
    </SchemaContext.Provider>
  );
};

export const useSchemaContext = () => useContext(SchemaContext);
