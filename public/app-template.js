const root = document.getElementById("root");

let count = 0;

root.innerHTML = `
  <button class="incr">+</button>
  <button class="decr">-</button>
  <span class="count">current count: ${count}</span>
`;

const incrButton = document.querySelector(".incr");
const decrButton = document.querySelector(".decr");
const currentCount = document.querySelector(".count");

incrButton.addEventListener("click", () => {
  count += 1;
  currentCount.innerHTML = `current count: ${count}`;
});

decrButton.addEventListener("click", () => {
  count -= 1;
  currentCount.innerHTML = `current count: ${count}`;
});
