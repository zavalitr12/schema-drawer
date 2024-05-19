import { Schema } from "../model/schema";

export type CreateSchemaRemoteRepo = (
  schema: Omit<Schema, "id">
) => Promise<string>;
