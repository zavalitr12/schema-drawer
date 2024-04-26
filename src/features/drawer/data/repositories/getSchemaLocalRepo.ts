import { GetSchemaLocalRepo } from "features/drawer/domain/repositories";

export const getSchemaLocalRepo: GetSchemaLocalRepo = () => {
  return Promise.resolve({
    id: "1234",
    name: "default",
    figures: [
      { dot1: { x: 1, y: 1 }, dot2: { x: 1, y: 1 } },
      { dot1: { x: 2, y: 2 }, dot2: { x: 2, y: 2 } },
    ],
  });
};
