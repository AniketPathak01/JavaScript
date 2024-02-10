

// class Car {
//     constructor(color, engine){
//         this.color = color;
//         this.engineCC = engine;
//     }

//     sayColor(color){
//         console.log(`this is ${color || this.color}`);
//     }
// }

// const maruti = new Car("red", 2000);
// console.log(maruti.color, maruti.engineCC);
// maruti.sayColor('yellow');

// const tata = new Car("black", 2500);
// console.log(tata.color, tata.engineCC);


class Vehical{
    constructor(name, tyre, color){

        this.name = name;
        this.tyre = tyre;
        this.color = color;
        
    }

    print(){
        console.log(`This is a ${this.name} car with ${this.tyre} tyre and the color of the car is ${this.color}`);
    }
}

// const car = new Vehical("Audi",4,"red");
// car.print();

class Truck extends Vehical{
    constructor(name, tyre, color, loadCapacity){

        super(name, tyre, color);
        this.loadCapacity = loadCapacity;

    }
    sayCapacity(){
        console.log(`the capacity is ${this.loadCapacity}`);
    }
}
const Mahindra = new Truck("mahindra", 8, "yellow", "10 Tones");
Mahindra.print();
Mahindra.sayCapacity();