const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    const currentLength = event.currentTarget.value.length;
    const totalLength = refs.input.dataset.length;
    const numberTotalLength = parseInt(totalLength);
    
    refs.input.classList.remove('valid');
    refs.input.classList.add('invalid');
      
    if (currentLength === numberTotalLength) {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    }

}