/**
 * Synchronous:
 *  occuring at the same time - sequentially
 *
 * Asynchronous:
 *  doesn't occur at the same time
 *
 */

/**
 * JavaScript is async or sync? Can it perform more than one task at the same time?
 *
 *   JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming    language with lots of flexibility.
 *
 *  So by nature, JS is asynchronous but there are flexibilities to do synchronous tasks
 *  in JS.
 *
 */

/**
 * In JS, functions are the "First Class Citizes". Meaning, functions can be assigned,
 * functions can be modified, functions can be used as an argument, functions can be
 * returned from another function, functions can be assigned to a variable.
 */

/**
 * Understanding synchronous execution of function
 *
 *  CALL STACK or Function Execution Stack
 *  -> Functions executes sequentially.
 *  -> f1 is invoked and goes to the call stack. The operation completes then f1 comes out
 *     of the stack.
 *  -> f2 is then invoked and goes to the call stack, operations completes then f2 comes out.
 *
 *  -> f3 is then invoked and operation completes then comes out of the call stack.
 *  -> img reference 1.png
 *
 */

function f1() {
  //code
}

function f2() {
  //code
}

function f3() {
  //code
}

f1();
f2();
f3();

/**
 * In the below example,
 *
 * -> First f3 is invoked and goes to the call stack.
 * -> f3 invokes f2 and pauses its own execution while f2 goes to the call stack
 *    and starts executing.
 * -> f2 also invokes f1 and pauses its own execution while f1 goes to the call stack
 *    and starts executing.
 * -> When f1 is done with its execution, f2 continues executing, comes out of call stack.
 * -> When f2 is done with its execution, f1 continues executing, comes out of call stack.
 * -> Finally, f3 (which was invoked first), will execute and finishes its operation.
 * -> Then,f3 comes out of call stack.
 * -> Call stack (LIFO) is realized!
 */

function f1() {
  //code
}

function f2() {
  f1();
}

function f3() {
  f2();
}

f3();

/**
 * HOW DOES ASYNCHRONOUS WORKS IN JS?
 *
 *   >> Most JS asynchronous operations can be classified into 2 primary triggers:
 *
 *   1) Browser/Web APIs: They are methods/functions like setTimeOut, even handlers like
 *                     click, mouseOver, and many more.
 *
 *   2) Promises: We will come back to promises later!
 *
 */

/**
 * How does Browser APIs work in asynchronous manner?
 *
 *  -> Browser APIs rely on callback functions.
 */

//example 1
function printMe() {
  console.log("print me");
}

setTimeout(printMe, 2000);

//example 2
function printMe() {
  console.log("print me");
}

function test() {
  console.log("test");
}

setTimeout(printMe, 2000);
test();

/**
 * JavaScript Callback Queue (Task Queue) working:
 *
 *  -> Same like "Call Stack" for sequential code. JS handles asynchronous code using
 *     Callback Queue.
 *
 *  -> Callback Queue follows quese data structure i.e. FIFO
 *  -> Callback or async functions are not put into the Call Stack, so the JS program are
 *     non-blocking.
 *
 *  -> Event loop: Call Stack push the callback function into the Callback Stack. When the
 *                 Call Stack is empty, the Callback Stack again push the function into
 *                 the Call Stack. This creates a loop which is called as "Event Loop".
 *
 *  >> Process of below code execution:
 *
 *   -> First, main is pushed into the Call Stack then it is executed.
 *   -> Then, console.log("main") is pushed into Call Stack then it is executed then leaves
 *      the stack.
 *   -> Then, setTimeOut function is pushed into the Call Stack. The callback
 *      function in the setTimeOut push it into the Callback Queue.
 *   -> Then, f2 goes to the Call Stack and it is executed.
 *   -> Then, console.log("f2") goes to the stack, and it is executed then leaves the stack.
 *   ->  Then f2 pops out of the stack and main also pops out.
 *   -> The Event Loop recognizes that the Call Stack is empty.
 *   -> The callback function f1 then goes into the stack.
 *   -> console.log("f1") goes into the stack and executed and pops out.
 *   -> Finally, f1 also pops out of the stack.
 *   -> img reference in 3.png
 *
 */

//example 3

function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);

  f2();
}

main();

/**
 * Promises:
 *   They are special objects that helps to perform asynchronous operations.
 *
 *  -> In the event loop, promise have higher priority than web API.
 *  -> Promises are handled by Job Queue. Event loop priritises the Job Queue.
 *
 *  -> img reference 4.gif
 */

const promise = new Promise((resolve, reject) => resolve("I am a promise"));

function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function main() {
  console.log("main");

  setTimeout(f1, 0);

  promise.then((resolve) => console.log(resolve));

  f2();
}

main();
