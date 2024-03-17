// console.log("first")
// setTimeout(() => {
//   console.log("mid")
// }, 3000)

// console.log("last")

function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🧀";
    console.log("there is cheese ", cheese);
    callback(cheese);
  }, 2000);
}

function makeDough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + "🧇";
    console.log("here is the dough ", dough);
    callback(dough);
  }, 2000);
}

function makePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + "🍕"
    console.log("here is the pizza ", pizza);
    callback(pizza)
  },2000)
}

getCheese((cheese) => {
  makeDough(cheese, (dough) => {
    makePizza(dough, (pizza) => {
      console.log("got the pizza ", pizza)     
    })
  })
});

// pizza -> dough -> cheese
