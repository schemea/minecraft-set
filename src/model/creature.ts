import { Entity } from "./entity";

export class Creature implements Entity {
    requireBackground = false;

    constructor(public readonly name: string, public readonly image: string) {
    }
}
