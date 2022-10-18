/**
 * NOTES:
 *
 * Block scope:
 *   if (condition) {
 *      body;
 *   }
 *
 *   while (condition) {
 *      body;
 *   }
 *
 * for (initialization; condition; increment) {
 *     body;
 * }
 *
 *
 *
 */

//Block Scope

/**
 * In the below code, foo is blocked scope. It can be only accessed
 * inside the "if" block. If we try to access foo outside the if block,
 * then we get reference error.
 */

if (true) {
  const foo = "foo";
  console.log(foo); // "foo"
}

// if (true) {
// 	const foo = "foo";
// }

// console.log(foo); // Uncaught ReferenceError: foo is not defined

/**
 * Variable can also be scoped in the function.
 */

function sayFoo() {
  const foo = "foo";
  console.log(foo);
}

sayFoo(); // "foo"

console.log(foo); // Uncaught ReferenceError: foo is not defined
