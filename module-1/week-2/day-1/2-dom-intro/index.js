// console.log(document);
// console.dir(document);
// console.dir(document.body);
// console.dir(document.head);
// console.log(document.title);

//DOM API

// Select all the elements with the class .student
console.log(document.querySelectorAll(".student"));

const studentsWithQuerySelectorAll = document.querySelectorAll(".student");
// querySelectorAll will return a NodeList,
// you can use .forEach() on a NodeList

// studentsWithQuerySelectorAll.forEach((student) => {
//   console.log(student);
// });

// Selects the FIRST element that meets the css selector

// console.log(document.querySelector(".student"));
// console.log(document.querySelector(".student :nth-child(2)"));

// console.log(document.querySelector("#header"));

// get the element with the id header
// console.log(document.getElementById("header"));

// console.log(document.getElementsByClassName("student"));

const students = document.getElementsByClassName("student");
// getElementsByClassName will return an HTML Collection
// it doesnt have a forEach method but you can still use a for of,
// and for loop

console.log(students);

// students.forEach((student) => {
//   console.log(student);
// });

// const spreadedStudents = [...students];

// spreadedStudents.forEach((student) => console.log(typeof student));

// const firstStudent = document.querySelector(".students .student:nth-child(1)");
// const firstStudent = document.querySelector(".students .student");

// console.log(firstStudent);

// firstStudent.style.backgroundColor = "red";
// firstStudent.textContent = "Foo";
// firstStudent.textContent = "<strong>Foo</strong>";
// firstStudent.innerText = "Bar";
// firstStudent.innerText = "<strong>Bar</strong>";
// firstStudent.innerHTML = "Baz";
// firstStudent.innerHTML = "<i>Baz</i>";

// [...students].forEach((student, index) => {
//   if (index % 2 === 0) {
//     student.style.backgroundColor = "purple";
//   }
// });

console.log(students[2].className);

// students[2].className += " FOOOOOOO";
students[2].classList.add("FO00O");
students[2].classList.remove("is-admin");

// If the class is present, toggle will remove it otherwise
// it will be added to the class list of an element
students[2].classList.toggle("is-admin");
students[2].classList.toggle("is-admin");
students[2].classList.toggle("is-admin");
students[2].classList.toggle("is-admin");
