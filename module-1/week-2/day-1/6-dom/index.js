const students = ["Bob", "Alice", "John", "Peter"];

const list = document.querySelector(".students");

students.forEach((student) => {
  list.innerHTML += `<li class="student">${student}</li>`;
});

attachClickListeners();

// function attachClickListeners() {
//   const listItems = document.querySelectorAll(".student");

//   listItems.forEach((item) => {
//     item.onclick = function () {
//       const className = item.className;

//       if (className.includes("is-selected")) {
//         item.classList.remove("is-selected");
//       } else {
//         item.classList.add("is-selected");
//       }
//     };
//   });
// }

function attachClickListeners() {
  const listItems = document.querySelectorAll(".student");

  listItems.forEach((item) => {
    item.onclick = function () {
      item.classList.toggle("is-selected");
    };
  });
}
