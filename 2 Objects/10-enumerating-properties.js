
let numbers=[1,2,3,4,5];
for(const element of numbers){
    console.log(element);
}

const dog={
    name:"Fido",
    age:2,
    eyeColor:"blue"
};
for(const property in dog){
    console.log(dog[property]);
}
const keys=Object.keys(dog);
for(const key of keys){
    console.log(key);
}

const values=Object.values(dog);
for(const value of values){
    console.log(value);
}

const entries=Object.entries(dog);
for(const entry of entries){
    console.log(entry);
}