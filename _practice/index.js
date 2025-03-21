function Programmer(name) { 
    this.name = name;
    this.code = function() {
        console.log(`${this.name} starts coding.`);
    };
}
this.debug = function() {
    console.log(`${this.name} is debugging.`);
}
this.meeting= function() {
    console.log(`${this.name} is attending meetings.`);     
}

const alice = new Programmer('Alice');
const steven = new Programmer('Steven');    

alice.code();
steven.code();