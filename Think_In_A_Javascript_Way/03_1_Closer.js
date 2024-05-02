function backAccount(initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  }
}

var account = backAccount(100000);
console.dir(account)

