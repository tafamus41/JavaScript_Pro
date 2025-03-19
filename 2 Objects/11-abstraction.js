
function Programmer(name,preferredLanguage){
    this.name=name;
    this.preferredLanguage=preferredLanguage;
    //Public method
    this.writeCode=function(){
        console.log(`${this.name} writes ${this.preferredLanguage} code.`);
    };
    this.drinkCoffee=function(){
        console.log(`${this.name} drinks coffee.`);
    };

    //Private method
    const drinkCoffee=function(){
        console.log(`${this.name} drinks coffee.`);
    }
    //Public method
    this.startDay=function(){
        drinkCoffee();
    }
    
}

const programmer=new Programmer("John","JavaScript");
programmer.writeCode();
programmer.drinkCoffee();
programmer.startDay();
