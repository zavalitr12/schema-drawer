export const getSchemaLocalRepo: any = () => {
  return Promise.resolve({
    id: "1234",
    name: "default",
    figures: [
      { type: "line", dot1: { x: 1, y: 1 }, dot2: { x: 1, y: 1 } },
      { type: "rectangle", dot1: { x: 2, y: 2 }, dot2: { x: 2, y: 2 } },
    ],
  });
};
