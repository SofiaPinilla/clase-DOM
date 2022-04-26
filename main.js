// let val;

// val = document;
// // val = document.head
// // val = document.body;
// // val = document.doctype;
// // val = document.domain;
// // val = document.URL;
// // val = document.characterSet;
// // val = document.contentType;
// console.log(document)

// console.log(document.getElementsByClassName('item'))

const ul = document.querySelector(".items");
// ul.remove();

ul.lastElementChild.remove();

ul.firstElementChild.innerText = "<h1>Hello InnerText</h1>";

ul.children[1].innerText = "The Bridge";

ul.lastElementChild.innerHTML = "<h1>Hello</h1>";
console.log(ul);

const btn = document.querySelector(".btn");
btn.style.background = "red";
// const form = document.getElementById("my-form");
function onSubmit(e) {
  e.preventDefault();
  document.getElementById("my-form").style.background = "#ccc";
  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
}
btn.addEventListener('click', onSubmit);
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   document.getElementById("my-form").style.background = "#ccc";
//   ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
// });

let listaSinOrden = document.createElement("ul");

document.body.appendChild(listaSinOrden);
let elemento1Lista = document.createElement("li");
elemento1Lista.textContent = "It's funny";
listaSinOrden.appendChild(elemento1Lista);

let elemento2Lista = document.createElement("li");
elemento2Lista.textContent = "It's Awesome";
listaSinOrden.appendChild(elemento2Lista);
