const input = document.getElementById("user-input");
const paragraph = document.getElementById("result");

// input.onmouseover = function () {
//   // console.log("changing...");
//   console.log("here");
//   // paragraph.textContent = input.value;
// };

input.oninput = function () {
  paragraph.textContent = input.value;
};

// input.onchange = function () {
//   paragraph.textContent = input.value;
// };
