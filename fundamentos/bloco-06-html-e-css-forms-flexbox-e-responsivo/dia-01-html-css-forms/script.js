const button = document.querySelector('#submitButton');

function changeEventDefault(event) {
    event.preventDefault();
}

button.addEventListener('click', changeEventDefault);