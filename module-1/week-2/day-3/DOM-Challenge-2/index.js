const btnCreate = document.getElementById("btn_create"); // the create button
const btnRemove = document.getElementById("btn_remove"); // the remove slected blocks button
const btnReset = document.getElementById("btn_reset"); // the reset button
const blocks = document.getElementById("blocks"); // the parent div containing all the created blocks
const inputColor = document.getElementById("input_color"); // the color picker
const inputBlocksCount = document.getElementById("input_blocks_count"); // the amount of block(s) to create

btnCreate.onclick = handleCreate;
btnRemove.onclick = handleRemoveSelected;
btnReset.onclick = handleReset;

function appendBlock(block) {
  blocks.appendChild(block);
  // appendChild adds a new child Elemend on any targeted parent
  // blocks here, is the parent !
}

function createBlock() {
  const newBlock = document.createElement("div"); // creates a new div
  newBlock.className = "block"; // adds a CSS class on the newly created div
  newBlock.style.background = inputColor.value;
  newBlock.onclick = toggleActiveStatus;
  return newBlock; // mandatory here : return the newly created block !!!
}

function handleCreate() {
  // handleCreate() is executed every time a user clicks on the create button
  const nbBlocks = inputBlocksCount.value;
  // value comes from the document, everything in the doc is a string (HTML)
  // console.log(typeof nbBlocks); // will alway be of type string !!!
  // step 1 => create a loop that will iterate nbBlocks times
  console.log(`I want to create ${nbBlocks} blocks`);

  for (let i = 0; i < nbBlocks; i += 1) {
    // step 2 => we'll get a fresh new block on each function call
    const block = createBlock();
    // step 3 => we now have the block, so let's add it to the document
    appendBlock(block);
  }
}

function handleRemoveSelected() {
  const selected = document.querySelectorAll("#blocks .block.is-selected");
  selected.forEach((block) => block.remove());
}

function handleReset() {
  blocks.innerHTML = "";
}

function toggleActiveStatus(e) {
  e.target.classList.toggle("is-selected");
}
