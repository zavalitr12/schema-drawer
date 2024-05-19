import { Schema } from "../model/schema";

export type GetSchemaRemoteRepo = (schemaId: string) => Promise<Schema>;
