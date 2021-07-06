class Character {
  constructor(name, health, x) {
    this.name = name;
    this.health = health;
    this.x = x;
  }

  isDead() {
    // if (this.health <= 0) {
    //   return true;
    // } else return false;

    return this.health <= 0;
  }

  moveLeft() {
    this.x = this.x - 1;
  }

  moveRight() {
    this.x = this.x + 1;
  }

  takeDamage(damage) {
    this.health = this.health - damage;
  }
}

class Mage extends Character {
  constructor(name, health, x, spellPower) {
    super(name, health, x);
    this.spellPower = spellPower;
  }

  spellCast() {
    return Math.floor(Math.random() * this.spellPower);
  }

  isInRange(location) {
    return this.x - location <= 10;
  }
}

class Rogue extends Character {
  constructor(name, health, x, attackPower) {
    super(name, health, x);

    this.attackPower = attackPower;
  }

  attack() {
    return Math.floor(Math.random() * 10);
  }

  isInRange(location) {
    return this.x - location <= 2;
  }
}

const gandalf = new Mage("Gandalf", 100, 0, 10);
const sylvanas = new Rogue("Sylvanas", 350, 100, 70);

// Enter game logic//

for (let i = 0; i < 10000; i++) {
  if (gandalf.isInRange(sylvanas.x)) {
    sylvanas.takeDamage(gandalf.spellCast());
  } else {
    gandalf.moveRight();
  }

  if (sylvanas.isDead()) {
    console.log("Gandalf has won !");
    break;
  }

  if (sylvanas.isInRange(gandalf.x)) {
    gandalf.takeDamage(sylvanas.attack());
  } else {
    sylvanas.moveLeft();
  }

  if (gandalf.isDead()) {
    console.log("Sylvanas has won");
    break;
  }
}

console.log(gandalf, "gandalf <<<<");
console.log(sylvanas, "sylvanas");
