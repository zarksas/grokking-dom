const ul = document.createElement("ul");
const li = document.createElement("li");
ul.classList.add("list");
li.textContent = "привет мир";

document.body.append(ul);
ul.append(li);
console.log(ul);
