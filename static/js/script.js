let count = 0;
const button = document.getElementById("counter-btn");
const counterText = document.getElementById("counter-text");

button.addEventListener("click", () => {
    count++;
    counterText.textContent = `You have clicked ${count} times`;
});
