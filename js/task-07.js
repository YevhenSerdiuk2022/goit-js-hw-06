const refs = {
    input: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}
refs.input.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    const fontSizeInput = event.currentTarget.value;
    refs.text.style.fontSize = fontSizeInput + "px";
   
}
