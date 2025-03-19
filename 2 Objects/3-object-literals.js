// let programmer={
//     name:"John",
//     preferredLanguage:"JavaScript",
//     writeCode:function(){
//         console.log(`${this.name} writes ${this.preferredLanguage} code.`);
//     },
//     drinkCoffee(){
//         console.log(`${this.name} drinks coffee.`);
//     }
// }
// programmer.writeCode();

function createProgrammer(name,preferredLanguage){
    return{
        name,
        preferredLanguage,
        writeCode(){
            console.log(`${this.name} writes ${this.preferredLanguage} code.`);
        },
        drinkCoffee(){
            console.log(`${this.name} drinks coffee.`);
        }
    }
}

const newProgrammer=createProgrammer("John","JavaScript");
newProgrammer.writeCode();

// const groceryItem={
//     name:"banana",
//     quantity:2,
//     display(){
//         console.log(`${this.name} x ${this.quantity}`);
//     }
// }
// groceryItem.display();