
// function example() {
//     const num=5;
//    return function logNum() {
//         console.log(num);        
//     }
    
// }    
// const innerFunction=example();
// innerFunction();

// function makeFunction() {
//     let privateNum=0;
//     function privateIncrement() {   
//         privateNum++;       
//     }
//     return {
//         logNum:()=>console.log(privateNum),
//         increment:()=>{privateIncrement();
//             console.log("Incremented");}

//     }
// }
// const{logNum,increment}=makeFunction();
// logNum();
// increment();
// logNum();

function Programmer(name, preferredLanguage) {
    let privateName = name;
    this.preferredLanguage = preferredLanguage;
    this.writeCode = function () {
        console.log(`${privateName} codes in ${preferredLanguage}`);
    };
    let drinkCoffee = function () {
        console.log("Gulp...");
    };
    this.startDay = function () {
        drinkCoffee();
    };
}

const programmer = new Programmer("John", "JavaScript");
programmer.writeCode();
programmer.startDay();