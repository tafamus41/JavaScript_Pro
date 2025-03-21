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

function Circle(){}
let obj={}
console.log(obj.__proto__)
console.log(Object.prototype)