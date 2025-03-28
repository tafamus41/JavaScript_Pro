let numbers = [1, 2, 3, 4, 5];
for (const element of numbers) {
  console.log(element);
}

const dog = {
  name: "Fido",
  age: 2,
  eyeColor: "blue",
};
for (const property in dog) {
  console.log(dog[property]);
}
const keys = Object.keys(dog);
for (const key of keys) {
  console.log(key);
}

const values = Object.values(dog);
for (const value of values) {
  console.log(value);
}

const entries = Object.entries(dog);
for (const entry of entries) {
  console.log(`Key: ${entry[0]}, Value: ${entry[1]}`);
}
function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.name} x ${this.quantity}`);
  };
}
const newItem = new GroceryItem("banana", 2);

for (const key of Object.keys(newItem)) 
  console.log(key);

for (const value of Object.values(newItem)) 
  console.log(value);

for (const entry of Object.entries(newItem)) 
  console.log(entry);