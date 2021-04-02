const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const span = document.getElementById("span");

let elapsed = 1000;
span.textContent = elapsed / 100;

const getElapsed = () => {
  elapsed--;
  span.textContent = elapsed / 100;
  console.log(elapsed);
};

startBtn.addEventListener("click", () => {
  console.log("start");
  const startTimer = setInterval(() => {
    if (elapsed === 1) {
      clearInterval(startTimer);
    }
    getElapsed();

    stopBtn.addEventListener("click", () => {
      console.log("stop");
      clearInterval(startTimer);
    });
  }, 10);
});

resetBtn.addEventListener("click", () => {
  console.log("reset");
});
