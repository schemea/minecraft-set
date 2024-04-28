import "../styles.scss";

import React from "react";
import { GraphComponent } from "./graph";
import { ITEMS } from "../items";
import { Item } from "../model/item";

export function RootComponent() {
    return (
        <div id="root">
            <GraphComponent index={ 0 } items={ [ ITEMS.goldenPickaxe, ITEMS.lavaBucket, ITEMS.activatorRails ] }/>
            <hr />
            <GraphComponent index={ 1 } items={ [ ITEMS.watch, ITEMS.goldenApple, ITEMS.diamondHoe ] }/>
            <hr/>
            <GraphComponent index={ 2 } items={ [ { item: ITEMS.netherBrickStairs, quantity: 8 } ] }/>
            <hr/>
            <GraphComponent index={ 3 } items={ [ ITEMS.cake, { item: ITEMS.fireworkRocket, quantity: 3 }, ITEMS.enchantedDiamondPickaxe ] }/>
        </div>
    );
}
