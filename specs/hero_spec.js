var Hero = require ('../hero');
var Food = require ( '../food');
var Rat = require ( '../rat');

var assert = require('chai').assert;

describe('hero', function(){

  it("has a name", function(){
    var hero1 = new Hero ( "Conan", 100, "chicken")
    assert.equal( "Conan", hero1.name)
  })
  it("can talk", function(){
    var hero1 = new Hero ( "Conan", 100, "chicken")

    assert.equal( "phrase", hero1.talk("phrase"))
  })
  it("can eat", function(){
    var food1 = new Food ("beef", 50)
    var hero1 = new Hero ( "Conan", 100, "chicken")
    hero1.eat(food1);
    assert.equal( 150, hero1.health)
  })
  it("can eat fav food", function(){
    var food1 = new Food ("beef", 50)
    var food2 = new Food ("chicken", 50)
    var hero1 = new Hero ( "Conan", 100, "chicken")
    hero1.eat(food2);
    assert.equal( 175, hero1.health)
  })
  it("rat has name", function(){
    var rat1 = new Rat ( "Roland" )
    assert.equal( "Roland", rat1.name)
  })
  it("rat can touch food", function(){
    var rat1 = new Rat ( "Roland" )
    var food1 = new Food ("chicken", 50)
    rat1.touch(food1)
    assert.equal( true, food1.poisoned)
  })
  it("hero eats poisoned food", function(){
    var rat1 = new Rat ( "Roland" )
    var food1 = new Food ("chicken", 50)
    var hero1 = new Hero ("Conan", 100, "chicken")
    rat1.touch(food1)
    console.log(food1.poisoned)
    hero1.eat(food1)
    assert.equal( 50, hero1.health)
  })





})