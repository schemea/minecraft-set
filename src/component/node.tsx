import React from "react";
import { GraphNode } from "../graph/node";
import { useAsset } from "../hook/asset";

interface Props {
    node: GraphNode;
}

export function NodeComponent({ node }: Props) {
    const { entity, x, y, width, height } = node;
    const image = useAsset("assets/" + entity.image);

    return (
        <g transform={ `translate(${ x } ${ y })` } clipPath="url(#item-clip)">
            <title>{ entity.name }</title>
            <rect x={ 0 } y={ 0 } width={ width } height={ height } fill={ entity.enchanted ? "#99c" : "#999" }/>
            { image && (
                <image xlinkHref={ image } width={ width } height={ height }/>
            ) }
            <text className="item-count" fill="white" fontSize={ 22 } x={ width - 4 } y={ height - 4 } textAnchor="end">
                { Math.ceil(node.quantity.average) }
            </text>
        </g>
    );
}
