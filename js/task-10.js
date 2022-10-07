const refs = {
  numberInput: document.querySelector('[type="number"]'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
 
function createBoxes(amount) {
  const elementsToAdd = [];
	for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
	}
  return elementsToAdd;
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

refs.createBtn.addEventListener('click', makeBoxes);

function makeBoxes() {
  let boxesToAdd = createBoxes(refs.numberInput.value);
  refs.boxes.append(...boxesToAdd);
  console.log(...boxesToAdd)
}

refs.destroyBtn.addEventListener('click', removeBoxes);

function removeBoxes() {
  destroyBoxes();
}














// function createBoxes(amount) {

//   const elementsToAdd = [];
//   for (let i = 0; i < amount; i += 1){
//     const div = document.createElement('div');
//     div.style.height = `${30 + 10 * i}px`;
//     div.style.width = `${30 + 10 * i}px`;
//     div.style.background = getRandomHexColor();
//     elementsToAdd.push(div);

//   }
//   return elementsToAdd;
  
// }
 
// function destroyBoxes(amount) {
//   refs.boxes.innerHTML = '';
// }
// console.log(createBoxes(5))