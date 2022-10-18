/**
 * Variables created with var are scoped to their nearest function or has
 * global scope.
 *
 */

function foo() {
  if (true) {
    var foo = "foo";
  }
  console.log(foo);
}


foo(); // "foo"

/**
 * Global Scope:
 *
 * Variables declared in the global scopes are accessible to every scopes.
 *
 * Module scope:
 *
 * Variables declared in the module is only accessible to that module.
 *
 */

const foo = "bar";

function hello() {
  console.log(foo);
}
