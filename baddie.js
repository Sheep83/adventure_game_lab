var Baddie = function( name, health, attackVal){
  this.name = name;
  this.health = health;
  this.attackVal = attackVal;
}

Baddie.prototype = {
  attack: function (target){
    target.health -= this.attackVal
  }
}

module.exports = Baddie;
