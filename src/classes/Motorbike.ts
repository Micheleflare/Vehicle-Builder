import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js'; // Importing Wheel

// Motorbike class that extends Vehicle
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  topSpeed: number;
  weight: number;
  wheels: Wheel[]; // Motorbike will have wheels
  canDoWheelie: boolean; // Unique to motorbike

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    canDoWheelie: boolean,
    wheels: Wheel[] // Motorbike will have wheels
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.topSpeed = topSpeed;
    this.weight = weight;
    this.canDoWheelie = canDoWheelie;
    
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;

    }
  }

  // Method for doing a wheelie
  doWheelie(): void {
    if (this.canDoWheelie) {
      console.log(`${this.make} ${this.model} is doing a wheelie!`);
    } else {
      console.log(`${this.make} ${this.model} cannot do a wheelie.`);
    }
  }

  // Overriding the printDetails method to include all relevant information
  override printDetails(): void {
    console.log(`Motorbike VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Can Do Wheelie: ${this.canDoWheelie ? 'Yes' : 'No'}`);
    
    // Print wheel details
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }
}

export default Motorbike;
