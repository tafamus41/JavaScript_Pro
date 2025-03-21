function Programmer(name) { 
    this.name = name;
}

Programmer.prototype.code = function() {
    console.log(`${this.name} starts coding.`);    
};

Programmer.prototype.debug = function() {
    console.log(`${this.name} is debugging.`);
};

Programmer.prototype.meeting = function() {
    console.log(`${this.name} is attending meetings.`);     
};

const alice = new Programmer('Alice');
const steven = new Programmer('Steven');    

// alice.code();
// steven.code();

console.log(alice.code === steven.code);