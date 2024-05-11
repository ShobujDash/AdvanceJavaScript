// let person = {};
// person.name = "Shobuj";
// person.age = 30;

// person.eat = function (){
//   console.log(`person is eathing`)
// }
// person.sleep = function () {
//   console.log(`person is sleeping`)
// }




// const psersonMethods = {
//   eat(){
//     console.log(`person is eathing`)
//   },
//   sleep() {
//     console.log(`person is sleeping`)
//   },
  
//   play() {
//     console.log(`person is playing`)
//   },

// }


// function Person(name, age) {
//   // let person = {};
//   let person = Object.create(Person.prototype)
//   // console.log(person)


//   person.name = name;
//   person.age = age;

//   // person.eat = psersonMethods.eat;
//   // person.sleep = psersonMethods.sleep;
//   // person.play = psersonMethods.play;
 
  
//   return person;
// }

function PersonWithNew(name, age) {
  // let this = Object.create(Person.prototype

  this.name = name;
  this.age = age;

  
  // return person;
}

PersonWithNew.prototype = {
    eat(){
      console.log(`person is eathing`)
    },
    sleep() {
      console.log(`person is sleeping`)
    },
    play() {
      console.log(`person is playing`)
    },
};

// const sakib = Person("Sakib", 35)
// const tamim = Person("Tamim", 35)

const sakib =new PersonWithNew("Sakib", 35)
const tamim =new PersonWithNew("Tamim", 35)

console.log(sakib)
sakib.play()
















// Object.create()
const captian = {
  name : "Shobuj",
  age : 36,
  country : "Bangladesh"
}
const player = Object.create(captian);
// console.log(player)
// console.log(player.name)










