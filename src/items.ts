import { Item } from "./model/item";
import { Craft, Milk } from "./model/source";


export const ITEMS = {
    stick: new Item("Bâton", "stick.webp"),
    rawGold: new Item("Or brut", "raw-gold.webp"),
    goldIngot: new Item("Lingot d'or", "gold-ingot.webp"),
    ironIngot: new Item("Lingot de fer", "iron-ingot.webp"),
    diamond: new Item("Diamant", "diamond.webp"),
    redstone: new Item("Poudre de redstone", "redstone.webp"),
    watch: new Item("Montre", "watch.webp"),
    apple: new Item("Pomme", "apple.webp"),
    goldenApple: new Item("Pomme dorée", "golden-apple.webp"),
    diamondHoe: new Item("Houe en diamant", "diamond-hoe.webp"),
    enchantedDiamondHoe: new Item("Houe en diamant enchantée", "diamond-hoe.webp"),
    netherBrick: new Item("Brique du nether", "nether-brick.webp"),
    netherBrickStairs: new Item("Escaliers en brique du nether", "nether-brick-stairs.webp"),
    cake: new Item("Gâteau", "cake.webp"),
    bucket: new Item("Sceau", "bucket.webp"),
    milkBucket: new Item("Sceau de lait", "milk-bucket.webp"),
    sugarCane: new Item("Canne à sucre", "sugar-cane.webp"),
    sugar: new Item("Sucre", "sugar.webp"),
    egg: new Item("Oeuf", "egg.webp"),
    wheat: new Item("Blé", "wheat.webp"),
    paper: new Item("Papier", "paper.webp"),
    gunpowder: new Item("Poudre à canon", "gunpowder.webp"),
    fireworkRocket: new Item("Fusée de feu d'artifice", "firework-rocket.webp"),
    diamondPickaxe: new Item("Pioche en diamant", "diamond-pickaxe.webp"),
    enchantedDiamondPickaxe: new Item("Pioche en diamant enchantée", "diamond-pickaxe.webp"),
    diamondSword: new Item("Epée en diamant", "diamond-sword.webp"),
    enchantedDiamondSword: new Item("Epée en diamant enchantée", "diamond-sword.webp")
};

ITEMS.watch.sources.push(new Craft([
    {
        item: ITEMS.redstone,
        quantity: 1
    },
    {
        item: ITEMS.goldIngot,
        quantity: 4
    }
]));

// ITEMS.goldIngot.sources.push(new Smelt(ITEMS.rawGold));

ITEMS.goldenApple.sources.push(new Craft([
    {
        item: ITEMS.apple,
        quantity: 1
    },
    {
        item: ITEMS.goldIngot,
        quantity: 8
    }
]));

ITEMS.diamondHoe.sources.push(new Craft([
    {
        item: ITEMS.diamond,
        quantity: 2
    },
    {
        item: ITEMS.stick,
        quantity: 2
    }
]));

ITEMS.enchantedDiamondHoe.sources.push(new Craft([
    {
        item: ITEMS.diamondHoe,
        quantity: 1
    }
]));

ITEMS.enchantedDiamondHoe.enchanted = true;

ITEMS.netherBrickStairs.sources.push(new Craft([
    {
        item: ITEMS.netherBrick,
        quantity: 5
    }
], 4));

ITEMS.cake.sources.push(new Craft([
    {
        item: ITEMS.milkBucket,
        quantity: 3
    },
    {
        item: ITEMS.sugar,
        quantity: 2
    },
    {
        item: ITEMS.egg,
        quantity: 1
    },
    {
        item: ITEMS.wheat,
        quantity: 3
    }
]));

ITEMS.milkBucket.sources.push(new Milk(ITEMS.bucket, []));
ITEMS.bucket.sources.push(new Craft([
    {
        item: ITEMS.ironIngot,
        quantity: 3
    }
]));

ITEMS.sugar.sources.push(new Craft([
    {
        item: ITEMS.sugarCane,
        quantity: 1
    }
]));

// ITEMS.egg.sources.push(new Drop(CREATURES.chicken, new ValueRange(1, 1), 1));

ITEMS.fireworkRocket.sources.push(new Craft([
    {
        item: ITEMS.paper,
        quantity: 1
    },
    {
        item: ITEMS.gunpowder,
        quantity: 1
    }
]));

ITEMS.paper.sources.push(new Craft([
    {
        item: ITEMS.sugarCane,
        quantity: 3
    }
]));

ITEMS.diamondPickaxe.sources.push(new Craft([
    {
        item: ITEMS.diamond,
        quantity: 3
    },
    {
        item: ITEMS.stick,
        quantity: 2
    }
]));

ITEMS.enchantedDiamondPickaxe.sources.push(new Craft([
    {
        item: ITEMS.diamondPickaxe,
        quantity: 1
    }
]));
ITEMS.enchantedDiamondPickaxe.enchanted = true;

ITEMS.diamondSword.sources.push(new Craft([
    {
        item: ITEMS.diamond,
        quantity: 2
    },
    {
        item: ITEMS.stick,
        quantity: 1
    }
]));

ITEMS.enchantedDiamondSword.sources.push(new Craft([ {
    item: ITEMS.diamondSword,
    quantity: 1
} ]));

ITEMS.enchantedDiamondSword.enchanted = true;
