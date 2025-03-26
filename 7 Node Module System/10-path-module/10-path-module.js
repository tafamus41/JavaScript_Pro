(function(exports,require,module,__filename,__dirname){
    const x='hello';
    console.log(x);
})
const path=require('path');
const pathObject=path.parse(__filename);
// console.log(path.basename(__filename));
console.log(pathObject);