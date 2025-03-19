function Programmer(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;
  //Public method
  this.writeCode = function () {
    console.log(`${this.name} writes ${this.preferredLanguage} code.`);
  };
  //Private method
  const drinkCoffee = function () {
    console.log(`${this.name} drinks coffee.`);
  }.bind(this);
  //Public method
  this.startDay = function () {
    drinkCoffee();
  };
}

const programmer = new Programmer("John", "JavaScript");
programmer.writeCode();
programmer.startDay();

function GroceryItem(name, quantity) {
  this.name = name;
  this.quantity = quantity;
  this.display = function () {
    console.log(`${this.name} x ${this.quantity}`);
  };
}

function GroceryList() {
  const items = [];
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.displayList = function () {
    this.items.forEach(function (item) {
      item.display();
    });
  };
}