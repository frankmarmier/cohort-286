const list = document.getElementById("list");
const btn = document.getElementById("btn");
const li = document.createElement("li");

// btn.onclick = () => {
//   const li = document.createElement("li");
//   li.textContent = "Liste item";

//   li.onclick = function () {
//     console.log("i am being clicked");
//   };

// li.onclick = () => {
//   console.log("I am being clicked", li);
// };

//   //   li.onclick = () => {
//   //     console.log("I am being clicked", li);
//   //   };

//   list.appendChild(li);
// };

btn.onclick = function () {
  list.innerHTML += "<li>List item</li>";

  attachEventListeners();
};

attachEventListeners();

function attachEventListeners() {
  document.querySelectorAll("li").forEach((li) => {
    li.onclick = () => {
      console.log("I am being clicked !", li);
    };
  });
}

// li.textContent = "Hello world"

// console.log(li);

// list.appendChild(li);

// li.appendChild(document.createElement("div"));

// document.querySelector("body").appendChild(li);
