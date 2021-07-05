// const btn = document.querySelector("#btn")
const btn = document.getElementById("btn");

// event listener   //event handler
// btn.onclick =      function(){}

// event listener
btn.onclick = function () {
  // console.log("clickity click click")

  const list = document.querySelector(".boxes");

  //   console.log(list);

  console.log(typeof list.innerHTML);
  // `<li class="box"></li>``<li class="box"></li>`

  list.innerHTML += `<li class="box"></li>`;

  const listItems = document.querySelectorAll(".box");

  listItems.forEach((item) => {
    item.onclick = function (event) {
      event.target.style.backgroundColor = "fuchsia";
    };
  });
};

// btn.onclick = function (event) {
//   console.log(event); // Is the event that was produced
//   console.log(event.target); // Is the element on which
//   // the event occured
// };

// function handleClick(event) {
//   console.log(event);
//   console.log("I am clicked !");
// }

// btn.onclick = handleClick;
