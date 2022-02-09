const arr = ["html", "css", "js"];

function render(arr) {
  const ul = document.createElement("ul");

  arr.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  });

  document.body.append(ul);

  return ul;
}

console.log(render(arr));
