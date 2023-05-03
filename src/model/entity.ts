import { Item } from "./item";
import { Creature } from "./creature";

export interface Entity {
    name: string
    image: string
    enchanted?: boolean
}

export function isItem(entity: Entity): entity is Item {
    return entity instanceof Item;
}

export function isCreature(entity: Entity): entity is Creature {
    return entity instanceof Creature;
}
