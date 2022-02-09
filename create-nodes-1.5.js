const a = document.createElement("div");
const b = document.createElement("div");
const c = document.createElement("div");
a.classList.add("red");
b.classList.add("green");
c.classList.add("blue");

c.textContent = "я вложен";

document.body.append(a, b, c);
console.log(c);
