/* Constructor Functions:A constructor function is a regular JavaScript function used to create multiple objects with the same structure and behavior. It acts as a blueprint for objects.*/

function Programmer(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;
  this.writeCode = function () {
    console.log(`${this.name} writes ${this.preferredLanguage} code.`);
  };
  this.drinkCoffee = function () {
    console.log(`${this.name} drinks coffee.`);
  };
}
const newProgrammer = new Programmer("Adam", "JavaScript");
newProgrammer.writeCode();

function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.name} x ${this.quantity}`);
  };
}
const newItem = new GroceryItem("apple", 2);
newItem.display();
