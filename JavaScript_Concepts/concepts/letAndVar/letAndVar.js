/**
 * NOTES:
 *
 *    -> let is not "hoisted" while var follows "hoisting"
 *    -> var has "function scope" while let has "block scope"
 *
 */

console.log(foo);

var foo = "bar";

// The intepreter hoists every declaration on the top.

var foo;

console.log(foo); // undefined

foo = "foo";

console.log(foo); // "foo"

/**
 * Functional hoisting:
 *
 * It is possible to initialize a function before it is declared.
 */

foo();

function foo() {
  console.log("bar");
}

// Only function declaration are hoisted but no function expression.

/**
 * 
    foo(); // Uncaught TypeError: foo is not a function
    var foo = function () { }

    bar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
    let bar = function () { }

    baz(); // Uncaught ReferenceError: Cannot access 'baz' before initialization
    const baz = function () { }

 */

    

/**
 *
 * CONSIDER not-use-before-define ESLint rule if you have to use var. Otherwise
 * avoid using var because it creates complexities because of hoisting.
 */
