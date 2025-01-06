console.log("---------------- Variables declaration tests :");

// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
// console.log(blockLet); // Throws ReferenceError
// console.log(blockConst); // Throws ReferenceError

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();
    
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

console.log("---------------- Variables reassign tests :");
{
    var myBlockVar = "Hello, I'm a block-scoped var";
    let myBlockLet = "Hello, I'm a block-scoped let";
    const myBlockConst = "Hello, I'm a block-scoped const";

    myBlockVar = "my block-scoped var";
    myBlockLet = "my block-scoped let";
//    myBlockConst = "my block-scoped const"; // Throws TypeError

    console.log(myBlockVar);
    console.log(myBlockLet);
    console.log(myBlockConst);
}

myBlockVar = "Hello, I'm a outside block-scoped var";
myBlockLet = "Hello, I'm a outside block-scoped let";
myBlockConst = "Hello, I'm a outside block-scoped const";

console.log(myBlockVar);
console.log(myBlockLet); // Throws ReferenceError 
console.log(myBlockConst); // Throws ReferenceError

