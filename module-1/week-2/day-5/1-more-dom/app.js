const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.onclick = function (event) {
    // console.log(card.childNodes);
    // console.log(card.children);
    // console.log(card.children[0]);
    // console.log(card.children[0].children[0]);
    // console.log(card.children[0].children[0].children[0]);

    // console.log(card.querySelector(".title"));

    const title = card.querySelector(".title");
    title.style.color = "dodgerblue";

    // console.log(title.nextElementSibling);
    // console.log(title.nextElementSibling.previousElementSibling);
  };
});

const deleteButtons = document.querySelectorAll(".btn-delete");

deleteButtons.forEach((btn) => {
  btn.onclick = function (event) {
    // console.log(event.target);
    // console.log(btn);
    // console.log(btn.parentElement);
    // console.log(btn.parentElement.parentElement);
    // console.log(btn.parentElement.parentElement.parentElement);
    // console.log(
    //   btn.parentElement.parentElement.parentElement.parentElement.parentElement
    //     .parentElement
    // );
    // btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    // console.log(btn.parentNode);

    // console.log(btn.closest(".card"));

    const parentCard = btn.closest(".card");

    parentCard.remove();
  };
});
