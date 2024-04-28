import { Item } from "./model/item";
import { Craft, Milk, Smelt } from "./model/source";


export const ITEMS = {
    activatorRails: new Item("Rails déclencheurs", "activator-rails.webp"),
    stick: new Item("Bâton", "stick.webp"),
    rawGold: new Item("Or brut", "raw-gold.webp"),
    goldIngot: new Item("Lingot d'or", "gold-ingot.webp"),
    ironIngot: new Item("Lingot de fer", "iron-ingot.webp"),
    diamond: new Item("Diamant", "diamond.webp"),
    redstone: new Item("Poudre de redstone", "redstone.webp"),
    redstoneTorch: new Item("Tourche de redstone", "redstone-torch.webp"),
    watch: new Item("Montre", "watch.webp"),
    apple: new Item("Pomme", "apple.webp"),
    goldenApple: new Item("Pomme dorée", "golden-apple.webp"),
    diamondHoe: new Item("Houe en diamant", "diamond-hoe.webp"),
    enchantedDiamondHoe: new Item("Houe en diamant enchantée", "diamond-hoe.webp"),
    netherRack: new Item("Netherrack", "nether-rack.webp"),
    netherBrick: new Item("Brique du nether", "nether-brick.webp"),
    netherBricks: new Item("Briques du nether", "nether-bricks.webp"),
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
    enchantedDiamondSword: new Item("Epée en diamant enchantée", "diamond-sword.webp"),
    enchantingTable: new Item("Table d'enchantement", "enchanting-table.webp"),
    book: new Item("Livre", "book.webp"),
    leather: new Item("Cuir", "leather.webp"),
    obsidian: new Item("Obsidienne", "obsidian.webp"),
    ironPickaxe: new Item("Pioche en fer", "iron-pickaxe.webp"),
    anvil: new Item("Enclume", "anvil.webp"),
    blockOfIron: new Item("Bloc de fer", "block-of-iron.webp"),
    lavaBucket: new Item("Seau de lave", "lava-bucket.webp"),
    goldenPickaxe: new Item("Pioche en or", "golden-pickaxe.webp"),
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

ITEMS.redstone.sources.push(new Craft([
    {
        item: ITEMS.ironPickaxe,
        quantity: 1
    }
]));

ITEMS.ironPickaxe.sources.push(new Craft([
    {
        item: ITEMS.ironIngot,
        quantity: 3
    },
    {
        item: ITEMS.stick,
        quantity: 2
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
        item: ITEMS.netherBricks,
        quantity: 5
    }
], 4));

ITEMS.netherBricks.sources.push(new Craft([
    {
        item: ITEMS.netherBrick,
        quantity: 4
    }
]));

ITEMS.netherBrick.sources.push(new Smelt(ITEMS.netherRack));

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
    },
    {
        item: ITEMS.enchantingTable,
        quantity: 1
    }
]));

ITEMS.anvil.sources.push(new Craft([
    {
        item: ITEMS.blockOfIron,
        quantity: 3
    },
    {
        item: ITEMS.ironIngot,
        quantity: 4
    }
]));

ITEMS.blockOfIron.sources.push(new Craft([
    {
        item: ITEMS.ironIngot,
        quantity: 9
    }
]));

ITEMS.enchantingTable.sources.push(new Craft([
    {
        item: ITEMS.diamond,
        quantity: 2
    },
    {
        item: ITEMS.book,
        quantity: 1
    },
    {
        item: ITEMS.obsidian,
        quantity: 4
    },
]));

ITEMS.book.sources.push(new Craft([
    {
        item: ITEMS.leather,
        quantity: 1
    },
    {
        item: ITEMS.paper,
        quantity: 3
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

ITEMS.activatorRails.sources.push(new Craft([
    {
        item: ITEMS.redstoneTorch,
        quantity: 1
    },
    {
        item: ITEMS.ironIngot,
        quantity: 6
    },
    {
        item: ITEMS.stick,
        quantity: 2
    }
]));

ITEMS.redstoneTorch.sources.push(new Craft([
    {
        item: ITEMS.redstone,
        quantity: 1
    },
    {
        item: ITEMS.stick,
        quantity: 1
    }
]));

ITEMS.goldenPickaxe.sources.push(new Craft([
    {
        item: ITEMS.goldIngot,
        quantity: 3
    },
    {
        item: ITEMS.stick,
        quantity: 2
    }
]));

ITEMS.enchantedDiamondSword.enchanted = true;

ITEMS.watch.wiki = "https://minecraft.fandom.com/fr/wiki/Montre";
ITEMS.goldIngot.wiki = "https://minecraft.fandom.com/fr/wiki/Lingot_d%27or";
ITEMS.redstone.wiki = "https://minecraft.fandom.com/fr/wiki/Poudre_de_redstone";
ITEMS.goldenApple.wiki = "https://minecraft.fandom.com/fr/wiki/Pomme_dor%C3%A9e";
ITEMS.apple.wiki = "https://minecraft.fandom.com/fr/wiki/Pomme";
ITEMS.diamondHoe.wiki = "https://minecraft.fandom.com/fr/wiki/Houe";
ITEMS.stick.wiki = "https://minecraft.fandom.com/fr/wiki/B%C3%A2ton";
ITEMS.diamond.wiki = "https://minecraft.fandom.com/fr/wiki/Diamant";
ITEMS.cake.wiki = "https://minecraft.fandom.com/fr/wiki/G%C3%A2teau";
ITEMS.milkBucket.wiki = "https://minecraft.fandom.com/fr/wiki/Seau_de_lait";
ITEMS.bucket.wiki = "https://minecraft.fandom.com/fr/wiki/Seau";
ITEMS.ironIngot.wiki = "https://minecraft.fandom.com/fr/wiki/Lingot_de_fer";
ITEMS.sugar.wiki = "https://minecraft.fandom.com/fr/wiki/Sucre";
ITEMS.sugarCane.wiki = "https://minecraft.fandom.com/fr/wiki/Canne_%C3%A0_sucre";
ITEMS.wheat.wiki = "https://minecraft.fandom.com/fr/wiki/Bl%C3%A9";
ITEMS.egg.wiki = "https://minecraft.fandom.com/fr/wiki/%C5%92uf";
ITEMS.fireworkRocket.wiki = "https://minecraft.fandom.com/fr/wiki/Feu_d%27artifice";
ITEMS.gunpowder.wiki = "https://minecraft.fandom.com/fr/wiki/Poudre_%C3%A0_canon";
ITEMS.paper.wiki = "https://minecraft.fandom.com/fr/wiki/Papier";
ITEMS.enchantedDiamondPickaxe.wiki = "https://minecraft.fandom.com/fr/wiki/Pioche#Enchantement";
ITEMS.diamondPickaxe.wiki = "https://minecraft.fandom.com/fr/wiki/Pioche";
ITEMS.netherBrickStairs.wiki = "https://minecraft.fandom.com/fr/wiki/Escalier#Fabrication";
ITEMS.netherBricks.wiki = "https://minecraft.fandom.com/fr/wiki/Briques_du_Nether";
ITEMS.netherBrick.wiki = "https://minecraft.fandom.com/fr/wiki/Brique_du_Nether";
ITEMS.netherRack.wiki = "https://minecraft.fandom.com/wiki/Netherrack";
ITEMS.enchantingTable.wiki = "https://minecraft.fandom.com/fr/wiki/Table_d%27enchantement";
ITEMS.book.wiki = "https://minecraft.fandom.com/fr/wiki/Livre";
ITEMS.leather.wiki = "https://minecraft.fandom.com/fr/wiki/Cuir";
ITEMS.obsidian.wiki = "https://minecraft.fandom.com/fr/wiki/Obsidienne";
ITEMS.ironPickaxe.wiki = "https://minecraft.fandom.com/fr/wiki/Pioche";
ITEMS.anvil.wiki = "https://minecraft.fandom.com/fr/wiki/Enclume";
ITEMS.blockOfIron.wiki = "https://minecraft.fandom.com/fr/wiki/Bloc_de_fer";
