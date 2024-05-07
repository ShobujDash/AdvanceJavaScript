/*
 Hoisting 
var vs let (and const)
function 
*/

// console.log(a)
// var a = 'Bangladesh';

// let LANGUAGE = "JAVA"
// let language = "JAVASCRIPT"

// function getLanguage() {
//   if (!language) {
//     let language = LANGUAGE;
//   }
//   return language;
// }

// console.log(`I love ${getLanguage()}`)

// fucntion er khetre hoisting ki babe hoy . ta nice bujano holo

// myFunc();
// function myFunc() {
//   console.log(`I love JavaScript`)
// }

myFunc();

const myFunc = function myFunc() {
  let language = "JavaScript";
  console.log(language);
}
