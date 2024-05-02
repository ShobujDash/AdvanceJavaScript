function stopWatch() {
  var startTime = Date.now();
  function getDelay() {
    console.log(Date.now() - startTime);
  }
  return getDelay;
}


var timmer = stopWatch();

for (let i = 0; i < 100000000; i++){
  var number = Math.random() * 100000;
}

timmer()

console.dir(timmer)
timmer = null;
timmer()

// setTimeout(() => {
//   timmer()
// }, 3000);


