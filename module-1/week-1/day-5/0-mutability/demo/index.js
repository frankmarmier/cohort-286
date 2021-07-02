const normalList = document.getElementById("normal");
const sortedList = document.getElementById("sorted");
const btnSort = document.getElementById("sort-list");

const students = ["John", "Alice", "Poe", "Joe", "Zidane"];

const render = (list, array) => {
  let listItems = "";

  for (let item of array) {
    listItems += `<li>${item}</li>`;
  }

  list.innerHTML = listItems;
};

btnSort.onclick = () => {
  const shallowCopy = [...students];

  const sortedStudents = shallowCopy.sort();

  render(normalList, students);
  render(sortedList, sortedStudents);
};

render(normalList, students);
