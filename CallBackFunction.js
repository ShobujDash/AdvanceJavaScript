// function Expression
// function greet() {
//   console.log("hello world")
// }

// greet();

// convert to arrow function
// const greet = (conunt)=> {
//   for (let i = 0; i < conunt; i++) console.log("hello Wrld")
// }

// greet(10);

// one line function
// const supare = (num) => num * num;
// console.log(supare(5))















// callback funciton
// A callback is a function passed as an argument to another function .

const calculate = (a, b, operation) => {
  return operation(a,b)
};

const addition = (num1, num2) => num1 + num2;

const result = calculate(3, 4, addition);


console.log(result)


// method 3 
function multiplty(a, b) {
  return a * b ;
}
const multiplyans = calculate(5, 5, multiplty);
console.log(multiplyans)







