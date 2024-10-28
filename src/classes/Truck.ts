import Vehicle from './Vehicle.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Wheel from './Wheel.js'; // Importing Wheel
import Motorbike from './Motorbike.js';
import Car from './Car.js'
// Truck class that extends Vehicle and implements AbleToTow
class Truck extends Vehicle implements AbleToTow {
  towingCapacity: number;
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  topSpeed: number;
  wheels: Wheel[];
  weight: number;
  // Truck will have wheels like Car

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[] // Truck will have an array of wheels
  ) 
  
  {
    super(); // Call Vehicle constructor
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.topSpeed = topSpeed;
    this.weight = weight;
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;

    }
  }

  // Implementing the tow method
  tow(vehicle: Truck|Car|Motorbike ): void {
  
      if (vehicle.weight > this.towingCapacity) {
      console.log(`Cannot tow ${vehicle.make} ${vehicle.model}; it exceeds towing capacity.`);
    } else {
      console.log(`Successfully towing ${vehicle.make} ${vehicle.model}.`);
    }
  }

  // Overriding the printDetails method to include all relevant information
  override printDetails(): void {
    super.printDetails()
    console.log(`Truck VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    
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

export default Truck;
