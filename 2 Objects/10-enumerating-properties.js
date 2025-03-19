
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