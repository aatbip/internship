// program showing local scope of a variable

//variable b can't be accessed outside because of the local scope.

let foo = "hello";

function greet() {
  let bar = "World";
  console.log(foo + bar);
}

greet();
console.log(foo + bar); // error

/************************************************************/

// program showing block-scoped concept
// global variable
let a = "Hello";

function greet() {
  // local variable
  let b = "World";

  console.log(a + " " + b);

  if (b == "World") {
    // block-scoped variable
    let c = "hello";

    console.log(a + " " + b + " " + c);
  }

  // variable c cannot be accessed here
  console.log(a + " " + b + " " + c);
}

greet();

// if we change let c to var c then there won't be error because
// var is not blocked scope but functional scoped.
