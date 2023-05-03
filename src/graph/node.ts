import { Entity } from "../model/entity";
import { ValueRange } from "../model/valueRange";

export class Box {
    constructor(
        public x1: number,
        public y1: number,
        public x2: number,
        public y2: number
    ) {
    }

    get x() {
        return this.x1;
    }

    get y() {
        return this.y1;
    }

    get width() {
        return this.x2 - this.x1;
    }

    get height() {
        return this.x2 - this.x1;
    }
}

export interface GraphNode {
    entity: Entity;
    quantity: ValueRange;
    x: number;
    y: number;
    width: number;
    height: number;
    group: GraphNodeGroup;
}

export interface GraphLayer {
    nodeGroups: GraphNodeGroup[];
    index: number;
}

export class GraphNodeGroup {
    nodes: GraphNode[] = [];
    areas: Box[] = [];

    x = 0;
    y = 0;

    constructor(public readonly parent?: GraphNode) {
    }

    isEmpty() {
        return this.nodes.length === 0;
    }
}
