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
// Alcance global
console.log(globalVar); // Salida: "Soy una variable global"
console.log(globalLet); // Salida: "También soy global, pero con alcance de let"
console.log(globalConst); // Salida: "Soy una constante global"

//Block Scope
console.log(blockVar);
console.log(blockLet);
function show(){
var functionVar = "Soy una var con alcance de bloque";
let functionLet = "Soy un let con alcance de bloque";
const functionConst = "Soy un const con alcance de bloque";
}
show();

console.log(functionVar); // Lanza ReferenceError
console.log(functionLet); // Lanza ReferenceError
console.log(functionConst); // Lanza ReferenceError

// console.log(blockVar);
// console.log(blockLet);