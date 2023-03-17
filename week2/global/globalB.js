const A = require("./globalA");
console.log(A());   // globalA

globalThis.message = "Hi";
console.log(A());   // Hi