// Vanilla
const root = document.getElementById("root");

let count = 0;

const currentCount = document.createElement("span");
currentCount.innerHTML = `current count: ${count}`;

const incrButton = document.createElement("button");
incrButton.innerHTML = "+";
incrButton.addEventListener("click", () => {
  count += 1;
  currentCount.innerHTML = `current count: ${count}`;
});

const decrButton = document.createElement("button");
decrButton.innerHTML = "-";
decrButton.addEventListener("click", () => {
  count -= 1;
  currentCount.innerHTML = `current count: ${count}`;
});

root.append(incrButton);
root.append(decrButton);
root.append(currentCount);
