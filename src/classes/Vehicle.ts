import Driveable from '../interfaces/Driveable.js';
class Vehicle implements Driveable {
  started: boolean;
  currentSpeed: number;
 
    constructor() { // Accept weight as a parameter in the constructor
    this.started = false;
    this.currentSpeed = 0;
 // Initialize the weight property
  }
  // Method to print vehicle details
  printDetails(): void {
    console.log(`Vehicle started: ${this.started}`);
    console.log(`Vehicle current speed: ${this.currentSpeed} mph`);
    
  }
  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log('Vehicle started');
  }
  // Method to accelerate the vehicle
  accelerate(change: number): void {
    if (this.started) {
      this.currentSpeed += change;
      console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }
  // Method to decelerate the vehicle
  decelerate(change: number): void {
    if (this.started) {
      this.currentSpeed -= change;
      console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
    } else {
      console.log('Start the vehicle first');
    }
  }
  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log('Vehicle stopped');
  }
  // Method to turn the vehicle
  turn(direction: string): void {
    if (this.started) {
      console.log(`Vehicle turned ${direction}`);
    } else {
      console.log('Start the vehicle first');
    }
  }
  // Method to reverse the vehicle
  reverse(): void {
    if (this.started) {
      console.log('Vehicle reversed');
    } else {
      console.log('Start the vehicle first');
    }
  }
}
// Export the Vehicle class
export default Vehicle;
