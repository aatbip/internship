const main = document.querySelector(".main");

const box = document.createElement("div");

const ball = document.createElement("div");

const exit = document.createElement("div");

// box.style.width = 12 + "em";
// box.style.height = 16 + "em";
// box.style.border = 2 + "px";
// box.style.borderColor = "black";
// box.style.borderStyle = "solid";

box.classList.add("box");
ball.classList.add("ball");
exit.classList.add("exit");

setTimeout(() => {
  main.append(box);
  box.append(ball);
  box.append(exit);
}, 1000);

// exit.addEventListener("click", () => {
//   box.remove();
//   ball.remove();
//   exit.remove();
// });

exit.onclick = () => {
  box.remove();
  ball.remove();
  exit.remove();
};

let move = 0;
let trigger = false;
const moveBall = () => {
  if (!trigger) {
    move += 1;
    ball.style.top = move + "px";
    if (move == 590) {
      trigger = true;
    }
  } else {
    move -= 1;
    ball.style.top = move + "px";
    if (move == 5) {
      trigger = false;
    }
  }
};

setInterval(() => {
  moveBall();
}, 5);
