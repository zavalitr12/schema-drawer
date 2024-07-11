import { useEffect, useState } from "react";
import { Figure } from "features/drawer/domain/model/figure";
import { Schema } from "features/drawer/domain/model/schema";
import { Coords } from "features/drawer/domain/model/coords";
import { Action } from "features/drawer/domain/model/action";
import { moveFigureUseCase } from "features/drawer/domain/usecases/moveFigureUseCase";

async function getSchemaUseCase() {
  const vectorFigure: Figure = {
    id: "parent1",
    figures: [
      {
        id: "child1",
        type: "line",
        coords: [
          {
            id: "child1-coord-1",
            x: 100,
            y: 300,
          },
          {
            id: "child1-coord-2",
            x: 200,
            y: 500,
          },
        ],
        style: {},
        actions: [],
      },
      {
        id: "child2",
        type: "circle",
        coords: [
          {
            id: "child2-coord-1",
            x: 100,
            y: 300,
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
            id: "child3-coord-1",
            x: 200,
            y: 500,
          },
        ],
        radius: 5,
        style: {},
        actions: [],
      },
    ],
    style: {},
    actions: [
      {
        id: "action-1",
        coordsInfo: [
          { id: "action-1", type: "free" },
          { id: "child1-coord-1", type: "free" },
          { id: "child2-coord-1", type: "free" },
        ],
        coords: {
          x: 100,
          y: 300,
        },
      },
      {
        id: "action-2",
        coordsInfo: [
          { id: "action-2", type: "free" },
          { id: "child3-coord-1", type: "free" },
          { id: "child1-coord-2", type: "free" },
        ],
        coords: {
          x: 200,
          y: 500,
        },
      },
    ],
  };

  const squareFigure: Figure = {
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
          { id: "action-3", type: "vertical" },
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
          { id: "action-4", type: "vertical" },
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
      {
        id: "action-3",
        coordsInfo: [
          { id: "action-3", type: "free" },
          { id: "action-1", type: "vertical" },
          { id: "action-4", type: "horizontal" },
          { id: "child7-coord2", type: "free" },
          { id: "child4-coord1", type: "free" },
          { id: "child8-coord1", type: "free" },
          { id: "child3-coord1", type: "horizontal" },
          { id: "child7-coord1", type: "horizontal" },
          { id: "child6-coord2", type: "horizontal" },
          { id: "child1-coord1", type: "vertical" },
          { id: "child5-coord1", type: "vertical" },
          { id: "child8-coord2", type: "vertical" },
        ],
        coords: {
          x: 400,
          y: 200,
        },
      },
      {
        id: "action-4",
        coordsInfo: [
          { id: "action-4", type: "free" },
          { id: "action-2", type: "vertical" },
          { id: "action-3", type: "horizontal" },
          { id: "child3-coord1", type: "free" },
          { id: "child6-coord2", type: "free" },
          { id: "child7-coord1", type: "free" },
          { id: "child2-coord1", type: "vertical" },
          { id: "child5-coord2", type: "vertical" },
          { id: "child6-coord1", type: "vertical" },
          { id: "child4-coord1", type: "horizontal" },
          { id: "child8-coord1", type: "horizontal" },
          { id: "child7-coord2", type: "horizontal" },
        ],
        coords: {
          x: 400,
          y: 400,
        },
      },
    ],
    style: {},
  };
  const schema: Schema = {
    info: {},
    figures: [vectorFigure, squareFigure],
  };
  return schema;
}

export function useSchema() {
  const [schema, setSchema] = useState<Schema>();

  useEffect(() => {
    getSchemaUseCase().then((schema) => setSchema(schema));
  }, []);

  const updateFigureCoords = (
    figureId: string,
    actionType: Action,
    newCoord: Omit<Coords, "id">
  ): void => {
    if (!schema) return;

    const updatedSchema = moveFigureUseCase(
      schema,
      figureId,
      actionType,
      newCoord
    );

    setSchema(updatedSchema);
  };

  const updateFigureStyle = (figureId: string, newStyles: any): void => {};

  const updateSchemaInfo = (schemaId: string, schemaInfo: any): void => {};

  return {
    schema,
    updateFigureCoords,
    updateFigureStyle,
    updateSchemaInfo,
  };
}

/**
 * schema
 *  updateFigure(newFigure)
 *
 * figure
 *  updateCoords(coords)
 *  updateStyle(style)
 *
 */
