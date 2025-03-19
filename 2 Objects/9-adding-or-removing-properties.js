
const person={name:"Adam"};
console.log(person);

person.favoriteFood="Pizza";
console.log(person);

person["favoriteIceCream"]="Vanilla";
console.log(person);

delete person.favoriteIceCream;
console.log(person);

person.eat=function(){
    console.log(`${this.name} eats ${this.favoriteFood}.`);
}
person.eat();