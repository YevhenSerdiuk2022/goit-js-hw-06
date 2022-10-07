const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
}
refs.inputName.addEventListener('input', onInput);

function onInput(event) {
    console.log(event.currentTarget.value);
    refs.outputName.textContent = event.currentTarget.value;
}



