import { Schema } from "../types";

export type SchemaContextType = {
  schema: Schema | undefined;
  updateSchema: (schema: Schema) => void;
};
