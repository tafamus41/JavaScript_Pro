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

function add(num1, num2) {
  return num1 + num2;
}
const n = add;
console.log(n(1, 2));
console.log(add.length);

const ProgrammerFunc = new Function(
  "name",
  `
        this.name=name;
        this.writeCode=function(){
            console.log("Code in JavaScript");
        }`
);
const programmer = new ProgrammerFunc("Steven");
programmer.writeCode();

function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.name} x ${this.quantity}`);
  };
}
const newItem = new GroceryItem("apple", 8);
function calculatePrice(groceryItem,price) {
  return groceryItem.quantity * price;
}    
const performCalculation = calculatePrice;
console.log(performCalculation(newItem, 0.25));