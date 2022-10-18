/**
 * Closure:
 * JavaScript's capacity to access variables outside the function.
 */

function outerFunction(outer) {
  return function innerFunction(inner) {
    console.log(`Outer value is ${outer}`);
    console.log(`Inner value is ${inner}`);
  };
}

const next = outerFunction("outer");
next("inner");

/***************************************************/

const myPet = "dog";

function printName() {
  console.log(myPet);
}

printName();
