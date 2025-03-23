function Programmer(name) {
    this.name = name;
}   

Programmer.prototype.code = function() {
    console.log(`${this.name} starts coding.`);
};  

function FrontEndProgrammer(name) {
    Programmer.call(this, name); // Inherits properties from Programmer
}


FrontEndProgrammer.prototype = Object.create(Programmer.prototype);

const steven = new FrontEndProgrammer("Steven");
console.log(FrontEndProgrammer.prototype.constructor === Programmer);