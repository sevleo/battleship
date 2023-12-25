// eslint-disable-next-line import/no-cycle
import gameLoop from ".";

function addEventListeners() {
  const randomizeButton = document.querySelector(".randomize");
  randomizeButton.addEventListener("click", () => {
    gameLoop();
  });
}

export default addEventListeners;
