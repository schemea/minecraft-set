import { Item } from "../model/item";
import React, { Fragment } from "react";
import { createGraph } from "../graph";
import { NodeComponent } from "./node";
import { LinkComponent } from "./link";
import { useAsset } from "../hook/asset";
import { Isolate } from "./isolate";

interface Props {
    items: ({ item: Item, quantity: number } | Item)[];
    index: number;
}

const GRAPH_GAP = 100;

export function GraphComponent({ items, index }: Props) {
    const fragments: JSX.Element[] = [];

    let x = 0;
    let height = 0;
    for (const item of items) {
        const { graph, fragment } = renderGraph(item);
        fragments.push(
            <g key={ x } transform={ `translate(${ x } 0)` }>
                { fragment }
            </g>
        );

        x += graph.size.width + GRAPH_GAP;
        height = Math.max(height, graph.size.height);
    }

    const fonts = {
        regular: useAsset("assets/minecraft.otf"),
        bold: useAsset("assets/minecraft-bold.otf")
    };

    if (!fonts.bold || !fonts.regular) {
        return <Fragment/>;
    }

    return (
        <Isolate>
            {/*<svg width={ Math.max(110, x - GRAPH_GAP) } height={ height + 100 }*/}
            <svg width={ innerWidth } height={ height + 100 }
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <defs>
                    <rect id="item-rect" width={ 64 } height={ 64 } rx={ 4 }/>
                    <clipPath id="item-clip">
                        <use href="#item-rect"/>
                    </clipPath>
                </defs>
                <style>
                    @font-face &#123;
                    font-family: Minecraft;
                    src: url({ fonts.regular });
                    font-weight: normal;
                    &#125;

                    @font-face &#123;
                    font-family: Minecraft;
                    src: url({ fonts.bold });
                    font-weight: bold;
                    &#125;

                    text &#123;
                    font-family: Minecraft;
                    &#125;

                    .item-count &#123;
                    font-family: Minecraft;
                    text-shadow: #222 2px 2px 2px;
                    &#125;

                    .link &#123;
                    stroke: #555;
                    stroke-width: 2;
                    &#125;

                    .clickable &#123;
                        cursor: pointer;
                    &#125;
                </style>
                <text fontSize={ 35 } fontWeight="bold" y={ 32 } x={ 2 } fill="black"
                      stroke="black">Set { index }</text>
                <text fontSize={ 35 } fontWeight="bold" y={ 30 } fill="white" stroke="black">Set { index }</text>
                <g transform="translate(0 100)">
                    { fragments }
                </g>
            </svg>
        </Isolate>
    );
}

function renderGraph(item: Item | { item: Item, quantity: number }) {
    const graph = "quantity" in item ? createGraph(item.item, item.quantity) : createGraph(item);

    const nodes: React.ReactElement[] = graph.nodes.map(
        node => <NodeComponent key={ node.entity.name } node={ node }/>
    );

    const links = graph.links.map(link => (
        <LinkComponent key={ `${ link.from.x }-${ link.from.y }` } from={ link.from } to={ link.to }/>
    ));

    return {
        graph,
        fragment: (
            <Fragment>
                { nodes }
                { links }
            </Fragment>
        )
    };
}
