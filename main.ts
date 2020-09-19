interface IHero{
    name: string;
    mainAttribute: string;
    movespeed: number;
    attackRange: number;
    basicAgility:number;
    basicIntelligence:number;
    basicPower:number;
    getInfo():void;
}

abstract class Hero implements IHero {
    name: string;
        mainAttribute: string;
        movespeed: number;
        attackRange: number;
        basicAgility:number;
        basicIntelligence:number;
        basicPower:number;
 
    constructor (name: string,
        mainAttribute: string,
        movespeed: number,
        attackRange: number,
        basicAgility:number,
        basicIntelligence:number,
        basicPower:number){
            this.name=name;
            this.mainAttribute=mainAttribute;
            this.movespeed=movespeed;
            this.attackRange=attackRange;
            this.basicPower=basicPower;
            this.basicAgility=basicAgility;
            this.basicIntelligence=basicIntelligence;
        }
    abstract getInfo(): void;
}
 
class RangeHero extends Hero { //Герои дальнего боя

    static readonly effectsFromSomeItems:boolean=false; //Данное поле вводится для "будущего", так как эффекты от предметов различаются от типа героя
    constructor (name: string,
        mainAttribute: string,
        movespeed: number,
        attackRange: number,
        basicAgility:number,
        basicIntelligence:number,
        basicPower:number){
            super(name, mainAttribute,movespeed,attackRange,basicIntelligence,basicAgility,basicPower);
        }
    getInfo():void{
        console.log("hero's name - " + this.name);
        console.log("hero's main atrribute - " + this.mainAttribute);
        console.log("hero's movespeed - " + this.movespeed);
        console.log("hero's attack range - " + this.attackRange);
        console.log("hero's agility - " + this.basicAgility);
        console.log("hero's intelligence - " + this.basicIntelligence);
        console.log("hero's power - " + this.basicPower);
        console.log("some item effects dont work");
    }
}

class meleeHero extends Hero { //Герои ближнего боя

    static readonly effectsFromSomeItems:boolean=true;
    constructor (name: string,
        mainAttribute: string,
        movespeed: number,
        attackRange: number,
        basicAgility:number,
        basicIntelligence:number,
        basicPower:number){
            super(name, mainAttribute,movespeed,attackRange,basicIntelligence,basicAgility,basicPower);
        }
    getInfo():void{
        console.log("hero's name - " + this.name);
        console.log("hero's main atrribute - " + this.mainAttribute);
        console.log("hero's movespeed - " + this.movespeed);
        console.log("hero's attack range - " + this.attackRange);
        console.log("hero's agility - " + this.basicAgility);
        console.log("hero's intelligence - " + this.basicIntelligence);
        console.log("hero's power - " + this.basicPower);
        console.log("all item effects work correctly");
    }
}


let MonkeyKing:IHero = new meleeHero("Monkey King","agility",305, 300, 40,35,35 ); //полиморфизм. установили для переменной тип IHero
MonkeyKing.getInfo();