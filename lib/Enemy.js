const Potion = require("./Potion");
const Character = require(`./Character`);

constPotion = require(`./Potion`);

class Enemy extends Character {
    constructor(name, weapon) {
        // calls parent constructor (Character in this case)
        super(name);

        this.weapon = weapon;
        this.potion = new Potion();

    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;