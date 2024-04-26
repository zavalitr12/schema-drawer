import { ChangeEvent, useEffect, useState } from "react";
import { getSchemaUseCase } from "features/drawer/infra/factory/usecases";
import { Schema } from "features/drawer/domain/model";

export function useSchema() {
    const [schema, setSchema] = useState<Schema>();

    useEffect(() => {
        getSchemaUseCase().then((schema) => setSchema(schema));
    }, []);

    const updateSchemaInfo = (field: string, event: ChangeEvent<HTMLInputElement>) => {
        schema && setSchema({ ...schema, [field]: event.target.value });
    };

    const updateFigure = (figure: any, event: any) => {
        if (!schema) return;
        const newFigure = { ...figure, dot1: { x: event.clientX, y: event.clientY } }
        const figureIndex = schema.figures.indexOf(figure);
        const figures = [...schema.figures.slice(0, figureIndex), newFigure, ...schema.figures.slice(figureIndex + 1)]
        setSchema({ ...schema, figures });
    }

    return {
        schema,
        updateSchemaInfo,
        updateFigure
    }
}