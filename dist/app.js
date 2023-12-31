"use strict";
var _a;
const e1 = {
    name: "Masoud",
    privileges: ["Create server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Masoud", "Zin");
result.split;
function printEmployeeInfo(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInfo(e1);
class Car {
    derive() {
        console.log("Driving...");
    }
}
class Truck {
    derive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo... " + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.derive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const userInputElement = document.getElementById("user-input");
const unsafeUserInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there!";
if (unsafeUserInputElement) {
    userInputElement.value = "Hi there!";
}
const errorBag = {
    email: "Not a valid email",
    username: "Must start with a capital character!",
};
const fetchUserData = {
    id: "u1",
    name: "Masoud",
    job: { title: "CEO", description: "My own company" },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "Default";
//# sourceMappingURL=app.js.map