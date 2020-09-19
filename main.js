var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero = /** @class */ (function () {
    function Hero(name, mainAttribute, movespeed, attackRange, basicAgility, basicIntelligence, basicPower) {
        this.name = name;
        this.mainAttribute = mainAttribute;
        this.movespeed = movespeed;
        this.attackRange = attackRange;
        this.basicPower = basicPower;
        this.basicAgility = basicAgility;
        this.basicIntelligence = basicIntelligence;
    }
    return Hero;
}());
var RangeHero = /** @class */ (function (_super) {
    __extends(RangeHero, _super);
    function RangeHero(name, mainAttribute, movespeed, attackRange, basicAgility, basicIntelligence, basicPower) {
        return _super.call(this, name, mainAttribute, movespeed, attackRange, basicIntelligence, basicAgility, basicPower) || this;
    }
    RangeHero.prototype.getInfo = function () {
        console.log("hero's name - " + this.name);
        console.log("hero's main atrribute - " + this.mainAttribute);
        console.log("hero's movespeed - " + this.movespeed);
        console.log("hero's attack range - " + this.attackRange);
        console.log("hero's agility - " + this.basicAgility);
        console.log("hero's intelligence - " + this.basicIntelligence);
        console.log("hero's power - " + this.basicPower);
        console.log("some item effects dont work");
    };
    RangeHero.effectsFromSomeItems = false; //Данное поле вводится для "будущего", так как эффекты от предметов различаются от типа героя
    return RangeHero;
}(Hero));
var meleeHero = /** @class */ (function (_super) {
    __extends(meleeHero, _super);
    function meleeHero(name, mainAttribute, movespeed, attackRange, basicAgility, basicIntelligence, basicPower) {
        return _super.call(this, name, mainAttribute, movespeed, attackRange, basicIntelligence, basicAgility, basicPower) || this;
    }
    meleeHero.prototype.getInfo = function () {
        console.log("hero's name - " + this.name);
        console.log("hero's main atrribute - " + this.mainAttribute);
        console.log("hero's movespeed - " + this.movespeed);
        console.log("hero's attack range - " + this.attackRange);
        console.log("hero's agility - " + this.basicAgility);
        console.log("hero's intelligence - " + this.basicIntelligence);
        console.log("hero's power - " + this.basicPower);
        console.log("all item effects work correctly");
    };
    meleeHero.effectsFromSomeItems = true;
    return meleeHero;
}(Hero));
var MonkeyKing = new meleeHero("Monkey King", "agility", 305, 300, 40, 35, 35); //полиморфизм. установили для переменной тип IHero
MonkeyKing.getInfo();
