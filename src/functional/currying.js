// Haskell Curry
// Cuury function is to convert a function which takes N arguments in to a function takes 1 argument [N => 1]
function add(a, b) {
  return a + b;
}

function addCurry(a) {
  return function (b) {
    return a + b;
  };
};

const addCurry2Arrow = a => b => a + b;

add(1, 5)
addCurry(1)(5);
addCurry2Arrow(1)(5);