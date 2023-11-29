class ElectricalAppAppliance{
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugget = false;
    }
    plugIn(){
        console.log(`${this.name} Включено в розетку`);
        this.isPlugget = true;
    }

    unPlug(){
        console.log(`${this.name} Выключено из розетки`);
        this.isPlugget = false;
    }
}

class Iron extends ElectricalAppAppliance {
    constructor(name, brand, power, cost) {
        super(name, power);
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.cost = cost;
        this.isPlugget = true;
    }
}

class Computer extends ElectricalAppAppliance{
    constructor(name, brand, power, type, cost) {
        super(name, power);
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.type = type;
        this.cost = cost;
        this.isPlugget = false;
    }

}

class Tv extends ElectricalAppAppliance{
    constructor(name, brand, power, size, cost) {
        super(name, power);
        this.name = name;
        this.brand = brand;
        this.power = power;
        this.size = size;
        this.cost = cost;
        this.isPlugget = true;
    }
}

const iron = new Iron('Утюг', 'Philips', 1200, 10000 )

const personalComputer = new Computer('Компьютер', 'Apple', 1500, 'Стационарный', 150000)

const televisor = new Tv('Телевизор', 'Samsung', 150, '70\'', 100000)


iron.unPlug();
personalComputer.plugIn()

console.log(iron)
console.log(personalComputer)
console.log(televisor)

console.log(iron.isPlugget ? 'Утюг включен в розетку' : 'Утюг включен из розетки')
console.log(televisor.isPlugget ?  'Телевизор включен в розетку' : 'Телевизор включен из розетки')
console.log(personalComputer.isPlugget ? 'Компьютер включен в розетку' : 'Компьютер включен из розетки')