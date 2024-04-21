import { Schema, SchemaId } from "../model";

export type CreateSchemaRemoteRepo = (
  schema: Omit<Schema, "id">
) => Promise<SchemaId>;
