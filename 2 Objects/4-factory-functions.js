/* Factory Functions:A factory function is a function that returns a new object. It’s a way to create multiple objects with similar structures without using a class.*/
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

const groceryItem={
    name:"banana",
    quantity:2,
    display(){
        console.log(`${this.name} x ${this.quantity}`);
    }
}

function createGroceryItem(name,quantity){
    return{
        name,
        quantity,
        display(){
            console.log(`${this.name} x ${this.quantity}`);
        }
    }
}

const newItem=createGroceryItem("banana",2);
newItem.display();
