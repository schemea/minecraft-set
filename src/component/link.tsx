import { Vector } from "../model/vector";
import React, { Fragment } from "react";

interface Props {
    from: Vector;
    to: {
        x: number[]
        y: number
    };
}

export function LinkComponent({ from, to }: Props) {
    const { x: x1, y: y1 } = from;
    const { y: y2 } = to;

    const dy = y2 - y1;
    const ay = y1 + dy * 0.20;
    const by = y1 + dy * 0.80;

    const lines = to.x.map(x2 => {
        return (
            <Fragment key={ x2.toString() }>
                <line x1={ x1 } x2={ x2 } y1={ ay } y2={ by }/>
                <line x1={ x2 } x2={ x2 } y1={ by } y2={ y2 }/>
            </Fragment>
        );
    });

    return (
        <g className="link">
            <line x1={ x1 } x2={ x1 } y1={ y1 } y2={ ay }/>
            { lines }
        </g>
    );
}
