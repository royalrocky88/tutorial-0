const greetings = (name) => {
  console.log(`Hello ${name}`);
};

greetings("Rocky");
greetings("RamaKrishna");

// ------------------------------------------

const { add, sub, mul, div } = require("./calculator");

console.log(add(55, 99));
console.log(sub(99, 66));
console.log(mul(55, 99));
console.log(div(99, 66));

//=========================================================================
// Join path name and location

const path = require("path");

const filepath = path.join("users","rocky","hello.txt");

console.log(filepath);

