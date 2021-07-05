const students = ["Bob", "Alice", "Toto", "John"];
const btnAddStudent = document.getElementById("add-student");

const studentList = document.querySelector(".students");

btnAddStudent.onclick = function () {
  const input = document.getElementById("name"); // the input HTMLElement

  const inputValue = input.value; // get's the value inside the input

  studentList.innerHTML += `<li>${inputValue}</li>`;
  attachRemoveListenersToListItems();

  //   const listItem = document.createElement("li");
  //   listItem.innerHTML = inputValue;

  //   listItem.onclick = removeItem;

  //   studentList.appendChild(listItem);
};

init();

function init() {
  students.forEach((element, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = element;
    //   //   console.dir(listItem);

    // listItem.onclick = function (event) {
    //   //   listItem.remove(); // Remove the element itself
    //   //   event.target.remove();
    //   studentList.removeChild(listItem); // Remove the element contained by the parent
    // };

    // listItem.onclick = removeItem;

    // studentList.appendChild(listItem);

    studentList.innerHTML += `<li>${element}</li>`;

    attachRemoveListenersToListItems();
  });
}

function attachRemoveListenersToListItems() {
  const listItems = document.querySelectorAll(".students li");

  listItems.forEach((item) => {
    item.onclick = (event) => {
      event.target.remove();
    };
  });
}

function removeItem(event) {
  event.target.remove();
}
