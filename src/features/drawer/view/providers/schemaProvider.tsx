import { createContext, FC, ReactNode } from "react";
import { useSchema } from "features/drawer/view/hooks/useSchema";
import { SchemaContextType } from "./types";

export const SchemaContext = createContext<SchemaContextType>({
  schema: undefined,
  updateSchema: () => {},
});

export const SchemaProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const { schema, updateSchema } = useSchema();

  return (
    <SchemaContext.Provider value={{ schema, updateSchema }}>
      {children}
    </SchemaContext.Provider>
  );
};
