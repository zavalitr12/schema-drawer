import { Schema } from "../model/schema";
import {
  GetSchemaLocalRepo,
  CreateSchemaLocalRepo,
  GetSchemaRemoteRepo,
} from "../repositories";

export type GetSchemaUseCase = (
  getSchemaLocalRepo: GetSchemaLocalRepo,
  createSchemaLocalRepo: CreateSchemaLocalRepo,
  getSchemaRemoteRepo: GetSchemaRemoteRepo
) => (schemaId?: string) => Promise<Schema>;

export const buildGetSchemaUseCase: GetSchemaUseCase =
  (getSchemaLocalRepo, createSchemaLocalRepo, getSchemaRemoteRepo) =>
  (schemaId) => {
    if (!schemaId) {
      const localSchema = getSchemaLocalRepo();

      return localSchema || createSchemaLocalRepo();
    }

    return getSchemaRemoteRepo(schemaId);
  };
