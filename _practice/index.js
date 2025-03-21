// let person={
//     name:"Adam",
// }
// console.log(person.toString()); 
// Object.defineProperty(person,"name",{
//     writable:false,
//     configurable:true, 
//     enumerable:true
// })

// for(let key in person)
//     console.log(key);


// let objectBase=Object.getPrototypeOf(person);
// const propertyDescriptor=Object.getOwnPropertyDescriptor(objectBase,"toString");
// console.log(propertyDescriptor);

// function Circle(){}
// let obj={}
// console.log(Circle.prototype)
// console.log(obj.__proto__)
// console.log(Object.prototype)

// function Programmer(name, preferredLanguage) {
//     this.name = name;
//     this.preferredLanguage = preferredLanguage;
// }
// const programmer=new Programmer("John","JavaScript");


// Programmer.prototype.writeCode = function () {
//     console.log(`${this.name} writes code in ${this.preferredLanguage}`);
// };
// programmer.writeCode();

// for (let key in programmer) {
//     console.log(key);
// }

// console.log(programmer.hasOwnProperty("name"));
// console.log(programmer.hasOwnProperty("writeCode"));
// Programmer.prototype.toString = function () {
//     return `${this.name} codes in ${this.preferredLanguage}`;
// };

// const jsProgrammer = new Programmer('John', 'JavaScript');
// jsProgrammer.writeCode();
// console.log(jsProgrammer.toString());

Array.prototype.shuffle=function(){
    console.log("shuffle");
}

const array=[]
array.shuffle();