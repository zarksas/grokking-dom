const div = document.createElement("div");
const ul = document.createElement("ul");
const liInst = document.createElement("li");
const liInt = document.createElement("li");
const urlInst = document.createElement("a");
const urlInt = document.createElement("a");

urlInst.textContent = "наш инстаграм";
urlInst.href = "https://instagram.com/intocode";

urlInt.textContent = "наш сайт";
urlInt.href = "https://intocode.ru";

document.body.prepend(div);
div.append(ul);
ul.append(liInst);
ul.append(liInt);
liInst.append(urlInst);
liInt.append(urlInt);

console.log(div);
