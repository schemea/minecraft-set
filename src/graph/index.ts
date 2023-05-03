import { Box, GraphLayer, GraphNode, GraphNodeGroup } from "./node";
import { Item } from "../model/item";
import { Entity, isItem } from "../model/entity";
import { ValueRange } from "../model/valueRange";
import { Vector } from "../model/vector";

const SIZE = 64;
const Y_GAP = 150;

interface Link {
    from: Vector;
    to: {
        x: number[]
        y: number
    };
}

export function createGraph(root: Item, quantity = 1) {

    const rootGroup = new GraphNodeGroup();
    rootGroup.nodes.push(
        {
            entity: root,
            quantity: new ValueRange(quantity, quantity),
            width: SIZE,
            height: SIZE,
            group: rootGroup
        } as unknown as GraphNode
    );
    const layers: GraphLayer[] = [ {
        index: 0,
        nodeGroups: [ rootGroup ]
    } ];

    let currentLayer = layers[0];
    for (; ;) {
        const previousLayer = currentLayer;
        currentLayer = {
            index: previousLayer.index + 1,
            nodeGroups: []
        };

        for (const parentGroup of previousLayer.nodeGroups) {
            for (const node of parentGroup.nodes) {
                if (!isItem(node.entity)) continue;
                const group = new GraphNodeGroup(node);
                for (const source of node.entity.sources) {
                    function createNode(entity: Entity, min: number, max?: number): GraphNode {
                        const quantity = new ValueRange(node.quantity.min * min, node.quantity.max * (max || min));
                        return {
                            entity,
                            quantity,
                            width: SIZE,
                            height: SIZE,
                            group
                        } as unknown as GraphNode;
                    }

                    switch (source.type) {
                        case "craft":
                            source.components
                                .map(component => createNode(component.item, Math.ceil(component.quantity / source.quantity)))
                                .forEach(node => group.nodes.push(node));
                            break;
                        case "smelt":
                            group.nodes.push(createNode(source.item, source.quantity));
                            break;
                        case "drop": {
                            const node = createNode(source.entity, 1);
                            node.quantity.min /= source.quantity.min * source.rate;
                            node.quantity.max /= source.quantity.max * source.rate;
                            group.nodes.push(node);
                            break;
                        }
                        case "milk":
                            group.nodes.push(createNode(source.bucket, 1));
                            break;
                    }
                }

                if (!group.isEmpty()) {
                    currentLayer.nodeGroups.push(group);
                }
            }
        }

        if (currentLayer.nodeGroups.length > 0) {
            layers.push(currentLayer);
        } else {
            break;
        }
    }

    const size = {
        width: 0,
        height: 0
    };

    let y = 0;
    for (const layer of layers) {
        let groupX = 0;
        for (const group of layer.nodeGroups) {
            group.x = groupX;
            group.y = group.parent ? SIZE + Y_GAP : 0;
            const box = new Box(0, 0, 0, y + SIZE);
            let x = 0;
            for (const node of group.nodes) {
                node.x = x;
                node.y = 0;
                size.width = Math.max(size.width, groupX + x + SIZE);
                x += SIZE * 1.5;
            }

            box.x2 = x - 0.5 * SIZE;
            if (group.parent) {
                group.parent.group.areas.push(box);
                const nx = (box.x1 + box.x2 - SIZE) / 2;
                propagateGroupPosition(group);

                const inheritedGroupX = group.parent.x + group.parent.group.x - nx;
                if (group.x < inheritedGroupX) {
                    groupX = group.x = inheritedGroupX;
                }
            }
            groupX += x;
        }
        size.height = Math.max(size.height, y + SIZE);
        y += SIZE + Y_GAP;
    }

    for (const layer of layers) {
        for (const nodeGroup of layer.nodeGroups) {
            if (nodeGroup.parent) {
                // nodeGroup.x += nodeGroup.parent.group.x;
                nodeGroup.y += nodeGroup.parent.group.y;

            }

            for (const node of nodeGroup.nodes) {
                node.x += nodeGroup.x;
                node.y += nodeGroup.y;
            }
        }
    }

    return {
        links: findLinks(layers),
        nodes: layers
            .flatMap(layer => layer.nodeGroups)
            .flatMap(group => group.nodes),
        size,
    };
}


function findLinks(layers: GraphLayer[]): Link[] {
    return layers
        .flatMap(layer => layer.nodeGroups)
        .filter((nodeGroup): nodeGroup is GraphNodeGroup & { parent: GraphNode } => !!nodeGroup.parent)
        .map(nodeGroup => {
            const parent = nodeGroup.parent;
            const y = parent.y + parent.height;
            const padding = 10;
            return {
                from: {
                    x: parent.x + parent.width / 2,
                    y: y + padding
                },
                to: {
                    x: nodeGroup.nodes.map(node => node.x + node.width / 2),
                    y: y + Y_GAP - padding
                }
            };
        });
}


function getBounds(group: GraphNodeGroup) {
    let x = group.x;
    let y = group.y;
    x += Math.max(...group.nodes.map(node => node.x + node.width));
    y += Math.max(...group.nodes.map(node => node.y + node.height));

    return new Box(group.x, group.y, x, y);
}


function propagateGroupPosition(group: GraphNodeGroup) {
    const box = getBounds(group);
    const nx = (box.x1 + box.x2 - SIZE) / 2;

    const p = group.parent;
    if (p && nx > (p.x + p.group.x)) {
        const index = p.group.nodes.findIndex(value => p === value);
        if (index === 0) {
            p.group.x = nx;
        } else {
            const dx = nx - (p.x + p.group.x);
            for (let i = index; i < p.group.nodes.length; i++) {
                const current = p.group.nodes[index];
                current.x += dx;
            }
        }

        propagateGroupPosition(p.group);
    }
}
