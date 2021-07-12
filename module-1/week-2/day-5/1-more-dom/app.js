const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.onclick = function (event) {
    // console.log(card.childNodes);
    // console.log(card.children);
    // console.log(card.children[0]);
    // console.log(card.children[0].children[0]);
    // console.log(card.children[0].children[0].children[0]);

    // console.log(card.querySelector(".title"));

    /*
        You can query elements (querySelector, getElem...) from a Node/HTMLElement
        you don't have to have to go through document.
        This will apply the selector from a specific node
    */
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

    /*
    You can target the closest parent from a child element
    with the .closest() method
    https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    */
    const parentCard = btn.closest(".card");

    parentCard.remove();
  };
});
