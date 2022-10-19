import { moveRight, moveLeft } from "./main.js";

/**
 * Creating Elemenents and adding classlist
 */
const main = document.querySelector(".main");

const container = document.createElement("div");
container.classList.add("container");

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
wrapper.style.right = 0 + "em";

/**
 * Buttons
 */

const rightButton = document.createElement("button");
rightButton.textContent = "Move Right";
const leftButton = document.createElement("button");
leftButton.textContent = "Move Left";

// rightButton.onclick = moveRight; 

rightButton.addEventListener("click", () => {
  moveRight();
});

leftButton.addEventListener("click", () => {
  moveLeft();
});

/**
 * Creating image elements
 */
const imageOne = document.createElement("img");
const imageTwo = document.createElement("img");
const imageThree = document.createElement("img");
const imageFour = document.createElement("img");
const imageFive = document.createElement("img");

/**
 * Image src
 */

imageOne.src = "././img/img1.jpg";
imageTwo.src = "././img/img2.jpg";
imageThree.src = "././img/img3.jpg";
imageFour.src = "././img/img4.jpg";

/**
 * Appending elements
 */
main.append(container);
container.appendChild(wrapper);
wrapper.appendChild(imageOne);
wrapper.appendChild(imageTwo);
wrapper.appendChild(imageThree);
wrapper.appendChild(imageFour);
main.append(leftButton);
main.append(rightButton);
// container.childNodes.length();
