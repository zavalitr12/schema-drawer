import { Schema, SchemaId } from "../model";

export type GetSchemaRemoteRepo = (schemaId: SchemaId) => Promise<Schema>;
