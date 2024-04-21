import { Schema, SchemaId } from "../model";
import {
  GetSchemaLocalRepo,
  CreateSchemaLocalRepo,
  GetSchemaRemoteRepo,
} from "../repositories";

export type GetSchemaUseCase = (
  getSchemaLocalRepo: GetSchemaLocalRepo,
  createSchemaLocalRepo: CreateSchemaLocalRepo,
  getSchemaRemoteRepo: GetSchemaRemoteRepo
) => (schemaId?: SchemaId) => Promise<Schema>;

export const buildGetSchemaUseCase: GetSchemaUseCase =
  (getSchemaLocalRepo, createSchemaLocalRepo, getSchemaRemoteRepo) =>
  (schemaId) => {
    if (!schemaId) {
      const localSchema = getSchemaLocalRepo();

      return localSchema || createSchemaLocalRepo();
    }

    return getSchemaRemoteRepo(schemaId);
  };
