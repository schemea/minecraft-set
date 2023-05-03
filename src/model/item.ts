import { Source } from "./source";
import { Entity } from "./entity";

export class Item implements Entity {
    enchanted = false;
    wiki?: string

    constructor(public readonly name: string, public readonly image: string, public readonly sources: Source[] = []) {
    }
}
