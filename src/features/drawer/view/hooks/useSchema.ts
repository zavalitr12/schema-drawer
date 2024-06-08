import { useEffect, useState } from "react";
import { updateSchemaUseCase } from "features/drawer/infra/factory/usecases";
import { FigureType, Schema } from "../types";

async function getSchemaUseCase() {
  // const vectorFigure: FigureType = {
  //   id: "parent1",
  //   figures: [
  //     {
  //       id: "child1",
  //       type: "line",
  //       coords: [
  //         {
  //           id: "child1-coord-1",
  //           x: 100,
  //           y: 300,
  //         },
  //         {
  //           id: "child1-coord-2",
  //           x: 200,
  //           y: 500,
  //         },
  //       ],
  //       style: {},
  //       actions: [],
  //     },
  //     {
  //       id: "child2",
  //       type: "circle",
  //       coords: [
  //         {
  //           id: "child2-coord-1",
  //           x: 100,
  //           y: 300,
  //         },
  //       ],
  //       radius: 5,
  //       style: {},
  //       actions: [],
  //     },
  //     {
  //       id: "child3",
  //       type: "circle",
  //       coords: [
  //         {
  //           id: "child3-coord-1",
  //           x: 200,
  //           y: 500,
  //         },
  //       ],
  //       radius: 5,
  //       style: {},
  //       actions: [],
  //     },
  //   ],
  //   style: {},
  //   actions: [
  //     {
  //       id: "action-1",
  //       coordsInfo: [
  //         { id: "child1-coord-1", type: "free" },
  //         { id: "child2-coord-1", type: "free" },
  //       ],
  //       coords: {
  //         x: 100,
  //         y: 300,
  //       },
  //     },
  //     {
  //       id: "action-2",
  //       coordsInfo: [
  //         { id: "child3-coord-1", type: "free" },
  //         { id: "child1-coord-2", type: "free" },
  //       ],
  //       coords: {
  //         x: 200,
  //         y: 500,
  //       },
  //     },
  //   ],
  // };

  const squareFigure: FigureType = {
    id: "parent2",
    figures: [
      {
        id: "child1",
        type: "circle",
        coords: [
          {
            id: "child1-coord1",
            x: 200,
            y: 200,
          },
        ],
        radius: 5,
        style: {},
        actions: [],
      },
      {
        id: "child2",
        type: "circle",
        coords: [
          {
            id: "child2-coord1",
            x: 200,
            y: 400,
          },
        ],
        radius: 5,
        style: {},
        actions: [],
      },
      {
        id: "child3",
        type: "circle",
        coords: [
          {
            id: "child3-coord1",
            x: 400,
            y: 400,
          },
        ],
        radius: 5,
        style: {},
        actions: [],
      },
      {
        id: "child4",
        type: "circle",
        coords: [
          {
            id: "child4-coord1",
            x: 400,
            y: 200,
          },
        ],
        radius: 5,
        style: {},
        actions: [],
      },
      {
        id: "child5",
        type: "line",
        coords: [
          {
            id: "child5-coord1",
            x: 200,
            y: 200,
          },
          {
            id: "child5-coord2",
            x: 200,
            y: 400,
          },
        ],
        style: {},
        actions: [],
      },
      {
        id: "child6",
        type: "line",
        coords: [
          {
            id: "child6-coord1",
            x: 200,
            y: 400,
          },
          {
            id: "child6-coord2",
            x: 400,
            y: 400,
          },
        ],
        style: {},
        actions: [],
      },
      {
        id: "child7",
        type: "line",
        coords: [
          {
            id: "child7-coord1",
            x: 400,
            y: 400,
          },
          {
            id: "child7-coord2",
            x: 400,
            y: 200,
          },
        ],
        style: {},
        actions: [],
      },
      {
        id: "child8",
        type: "line",
        coords: [
          {
            id: "child8-coord1",
            x: 400,
            y: 200,
          },
          {
            id: "child8-coord2",
            x: 200,
            y: 200,
          },
        ],
        style: {},
        actions: [],
      },
    ],
    actions: [
      {
        id: "action-1",
        coordsInfo: [
          { id: "action-1", type: "free" },
          { id: "action-2", type: "horizontal" },
          { id: "child1-coord1", type: "free" },
          { id: "child5-coord1", type: "free" },
          { id: "child8-coord2", type: "free" },
          { id: "child6-coord1", type: "horizontal" },
          { id: "child5-coord2", type: "horizontal" },
          { id: "child2-coord1", type: "horizontal" },
          { id: "child8-coord1", type: "vertical" },
          { id: "child7-coord2", type: "vertical" },
          { id: "child4-coord1", type: "vertical" },
        ],
        coords: {
          x: 200,
          y: 200,
        },
      },
      {
        id: "action-2",
        coordsInfo: [
          { id: "action-2", type: "free" },
          { id: "action-1", type: "horizontal" },
          { id: "child2-coord1", type: "free" },
          { id: "child5-coord2", type: "free" },
          { id: "child6-coord1", type: "free" },
          { id: "child1-coord1", type: "horizontal" },
          { id: "child5-coord1", type: "horizontal" },
          { id: "child8-coord2", type: "horizontal" },
          { id: "child3-coord1", type: "vertical" },
          { id: "child6-coord2", type: "vertical" },
          { id: "child7-coord1", type: "vertical" },
        ],
        coords: {
          x: 200,
          y: 400,
        },
      },
      // {
      //   id: "action-3",
      //   coordIds: ["child7-coord2", "child4-coord1", "child8-coord1"],
      //   coords: {
      //     x: 400,
      //     y: 200,
      //   },
      // },
      // {
      //   id: "action-4",
      //   coordIds: ["child3-coord1", "child6-coord2", "child7-coord1"],
      //   coords: {
      //     x: 400,
      //     y: 400,
      //   },
      // },
    ],
    style: {},
  };
  const schema: Schema = {
    info: {},
    figures: [
      // vectorFigure,
      squareFigure,
    ],
  };
  return schema;
}

export function useSchema() {
  const [schema, setSchema] = useState<Schema>();

  useEffect(() => {
    getSchemaUseCase().then((schema) => setSchema(schema));
  }, []);

  const updateSchema = (schema: Schema) => {
    updateSchemaUseCase(schema)
      .then(() => {
        // notify about update
      })
      .catch(() => {
        // notify about error
      });
  };

  return {
    schema,
    updateSchema,
  };
}
