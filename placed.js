//---------before define (Error output)

//const num = require("./order.js");

//---------after define

// const value = require("./order.js");
// console.log(value);

//--------exporting value or expression

// const result = require("./order.js");
// console.log(result);

//--------exporting function while define

//const sum = require("./order.js");
//console.log(sum(99,99));

//--------exporting function after defining

//const mul = require("./order.js");

//console.log(mul(33, 99));

//--------exporting class while defining

// const StudentDetails = require("./order.js");

// const details = new StudentDetails("Rocky", 100);

// console.log(details);

// console.log(details.name);

//--------exporting class after defining

// const OfficeDetails = require("./order.js");

// const officeDetails = new OfficeDetails("RajaRam", 150);

// console.log(officeDetails);

// console.log(officeDetails.emp_name);
// console.log(officeDetails.emp_age);

//----------------------Named Exports----------------------

//---------Exporting multiple variable while defining

// const { values, studentName } = require("./order.js");

// console.log(values);
// console.log(studentName);

//----------Exporting multiple variable after defining

const { values, personName } = require("./order.js");

console.log(values);
console.log(personName);

//-----------Exporting multiple values and expressions

const { sum, div } = require("./order.js");

console.log(sum);

console.log(div);

//-----------Exporting multiple functions while defining

const { mul, sub } = require("./order.js");

console.log(mul(50, 30));

console.log(sub(30, 20));

//-----------Exporting multiple function after defining

const { addition, subtract } = require("./order.js");

console.log(addition(99, 10050));

console.log(subtract(1000, 789));

//-----------Exporting Multiple classes while defining

const { studentDetails, carDetails } = require("./order.js");

const newstudentDetail = new studentDetails("RahulRaja", 99, "B.Tech");
console.log(newstudentDetail);
console.log(newstudentDetail.name);

const newcarDetail = new carDetails("TaTa", "99KPH");
console.log(newcarDetail);
console.log(newcarDetail.name);

//----Exporting Multiple classes after defining

const { empDetail, transportDetail } = require("./order.js");

const newempDetail = new empDetail("Rocky", 66);
console.log(newempDetail);
console.log(newempDetail.name);

const newtransportDetail = new transportDetail("E-tron", "1000KPH");
console.log(newtransportDetail);
console.log(newtransportDetail.name);
