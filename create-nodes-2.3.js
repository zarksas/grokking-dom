const arr = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
];

const ul = document.createElement("ul");

arr.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  ul.append(li);
  li.append(a);
  a.href = item.url;
  a.textContent = item.name;
});
console.log(ul);
