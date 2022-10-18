/**
 * JavaScript allows nested scope which creates a scope tree.
 *
 * We can access variables from the parent scope inside the child scope.
 *
 */

if (true) {
  const foo = "foo";
  console.log(foo); // "foo"

  if (true) {
    const bar = "bar";
    console.log(foo); // "foo"

    if (true) {
      console.log(foo, bar); // "foo bar"
    }
  }
}

// JS also allows to nest functions.

function foo(bar) {
  function baz() {
    console.log(bar);
  }

  baz();
}

foo("hello");
