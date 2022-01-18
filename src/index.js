function sayWelcome() {
  // test 2
  return console.log('and welcome to freedom');
}

function helloFreedom() {
  console.log('hello there') + sayWelcome();
}

module.exports = helloFreedom;
