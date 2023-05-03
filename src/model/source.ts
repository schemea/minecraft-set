import { Creature } from "./creature";
import { Item } from "./item";
import { ValueRange } from "./valueRange";
import { Entity } from "./entity";

export class Drop {
    type: "drop" = "drop";

    constructor(public readonly entity: Creature, public readonly quantity: ValueRange, public readonly rate: number) {
    }
}

export class Craft {
    type: "craft" = "craft";

    constructor(public readonly components: Component[], public readonly quantity = 1) {
    }
}

export interface Component {
    item: Item;
    quantity: number;
}

export class Smelt {
    type: "smelt" = "smelt";

    constructor(public readonly item: Item, public readonly quantity = 1) {
    }
}

export class Mine {
    type: "mine" = "mine";

    constructor(public readonly block: Entity, tool?: Item) {
    }
}

export class Milk {
    type: "milk" = "milk";
    constructor(public readonly bucket: Item, public readonly targets: Creature[]) {
    }
}

export type Source = Drop | Craft | Smelt | Milk;
