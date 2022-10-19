/**
 * Move Right Function
 */

let initialPosition = 0;
let currentImage = 1;

const moveRight = () => {
  const wrapper = document.querySelector(".wrapper");
  if (currentImage < 4) {
    initialPosition += 25;
    currentImage += 1;
    wrapper.style.right = initialPosition + "em";
    console.log(initialPosition, currentImage)
  } else {
    initialPosition = 0;
    currentImage = 1;
    wrapper.style.right = initialPosition + "em";
  }
};

/**
 * Move Left Function
 */

const moveLeft = () => {
  const wrapper = document.querySelector(".wrapper");
  if (currentImage == 1) {
    initialPosition = 75;
    currentImage = 4;
    wrapper.style.right = initialPosition + "em";
  } else {
    initialPosition -= 25;
    currentImage -= 1;
    wrapper.style.right = initialPosition + "em";
  }
};

export { moveRight, moveLeft };
