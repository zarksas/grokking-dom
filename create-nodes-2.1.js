const arr = ["html", "css", "js"];
const ul = document.createElement("ul");

arr.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.append(li);
});

document.body.append(ul);

console.log(ul);
