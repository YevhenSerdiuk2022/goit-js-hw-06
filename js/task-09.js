function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  colorValue: document.querySelector('.color'),
}

refs.changeColorBtn.addEventListener('click', changeBackgroudColor)

function changeBackgroudColor(event) {
  
  let currentColor = getRandomHexColor();
 
  refs.body.style.backgroundColor = currentColor;
  refs.colorValue.textContent = currentColor;
}
