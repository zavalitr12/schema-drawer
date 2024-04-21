import { GetSchemaLocalRepo } from "features/drawer/domain/repositories";

export const getSchemaLocalRepo: GetSchemaLocalRepo = () => {
  return Promise.resolve({ id: "1234", figures: [] });
};
