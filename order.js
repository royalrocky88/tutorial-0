//-----------------Default Exports---------------
//----Exporting Variables while defining---------

//module.exports = let value = 5; //-----output error

//----Exporting variable after defining---------

// let value = 88;
// module.exports = value;

//----Export a value or expression-------------

// module.exports = 99 * 60;

//----Export function while defining---------

// module.exports = function (num1, num2) {
//   return num1 + num2;
// };

//----Export function after defining---------

// function mul(val1, val2) {
//   return val1 * val2;
// }

// module.exports = mul;

//----Exporting class while defining---------

// module.exports = class StudentDetails {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };

//----Exporting class after defining---------

// class OfficeDetails {
//   constructor(emp_name, emp_age) {
//     this.emp_name = emp_name;
//     this.emp_age = emp_age;
//   }
// }
// module.exports = OfficeDetails;

//-------------------Named Exports-------------------

//----Exporting multiple variable while defining

// exports.values = let values = 11;
// exports.studentName = let studentName = "Raghav";

//----Exporting Multiple variable after Defining

let values = 10;
exports.values = values;

let personName = "Rigita";
exports.personName = personName;

//----Exporting multiple values and expressions

let count = 20;

exports.sum = 88 + 120;

exports.div = count / 120;

//----Exporting multiple functions while defining

exports.mul = function (num1, num2) {
  return num1 * num2;
};

exports.sub = function sub(num1, num2) {
  return num1 - num2;
};

//----Exporting Multiple functions after defining

function addition(n1, n2) {
  return n1 + n2;
}
exports.addition = addition;

function subtract(n1, n2) {
  return n1 - n2;
}

exports.subtract = subtract;

//----Exporting Multiple classes while defining

exports.studentDetails = class StudentDetails {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
};

exports.carDetails = class CarDetails {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
};

//----Exporting Multiple classes after defining

class EmpDetail {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
exports.empDetail = EmpDetail;

class TransportDetail {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}
exports.transportDetail = TransportDetail;
