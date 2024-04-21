import { buildGetSchemaUseCase } from "features/drawer/domain/usecases";
import { createSchemaLocalRepo } from "features/drawer/data/repositories/createSchemaLocalRepo";
import { getSchemaLocalRepo } from "features/drawer/data/repositories/getSchemaLocalRepo";
import { getSchemaRemoteRepo } from "features/drawer/data/repositories/getSchemaRemoteRepo";

export const getSchemaUseCase = buildGetSchemaUseCase(
  getSchemaLocalRepo,
  createSchemaLocalRepo,
  getSchemaRemoteRepo
);
