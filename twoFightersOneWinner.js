function declareWinner(fighter1, fighter2, firstAttacker) {
  let damage1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  let damage2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  if (damage1 > damage2) {
    return fighter1.name;
  } else if (damage2 > damage1) {
    return fighter2.name;
  }
  return firstAttacker;
}
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
); //, "Lew");

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")
); //, "Harry");
