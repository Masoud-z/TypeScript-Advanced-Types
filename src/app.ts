type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Masoud",
  privileges: ["Create server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//Type Guard    Function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Masoud", "Zin");
result.split;

//----------++++----------
//TypeScript type guard
type UnknownEmployee = Employee | Admin;
function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInfo(e1);

//----------++++----------
// ---++ Type Guards with class ++---
class Car {
  derive() {
    console.log("Driving...");
  }
}

class Truck {
  derive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.derive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//----------++++----------
//---++Discriminated Unions++---
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

//----------++++----------
//---++Type Casting++---
// const userInputElement = <HTMLInputElement>(document.getElementById("user-input"));
const userInputElement = document.getElementById(
  "user-input"
) as HTMLInputElement; //This one is useful for React that <HTMLInputElement> is interpret as a component

const unsafeUserInputElement = document.getElementById("user-input");

userInputElement.value = "Hi there!";

if (unsafeUserInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there!";
}

//----------++++----------
//---++Index Properties++---
interface ErrorContainer {
  [prop: string]: string;
} //With this you can add as many values as you want but all of them should be string

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character!",
};
