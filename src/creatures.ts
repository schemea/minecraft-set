import { Creature } from "./model/creature";

export const CREATURES = {
    pig: new Creature("Cochon", "pig.png"),
    spider: new Creature("Araignée", "spider.png"),
    chicken: new Creature("Poule", "chicken.webp")
};

CREATURES.spider.requireBackground = true;
