// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}

// COMPLEXITY: O(n)
// the variable a does not matter, neither does stranger. They are not being used to determine
// how many times the function will run, the only thing determining the number of operations
// is the input

// same challenge, second time
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) { // happens n times
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

  }
  for (let j = 0; j < input; j++) { // happens n times
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}

// COMPLEXITY: O(n):
// the complexity of this would be O(2n + c) but it simplifies down to O(n)
// the amount of operations ran during the function are dependent on the input given at start