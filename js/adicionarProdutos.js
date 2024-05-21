import { objectApi } from "./conexaoApi.js";
const formulario = document.querySelector('#formulario');
const cleanButton = document.querySelector('#clean');
const sendButton = document.querySelector('#send');
const errorMessage = document.querySelector('.error');
const inputName = document.querySelector('[data-name]');
const inputPrice = document.querySelector('[data-valor]');
const inputUrl = document.querySelector('[data-imagem]');
const errorNameMessage = document.querySelector('.errorNameMessage');
const errorPrecoMessage = document.querySelector('.errorPrecoMessage');
const errorUrlMessage = document.querySelector('.errorUrlMessage');
const errorAudio = new Audio('/src/sounds/errorAudio.mp3');
const cleanAudio = new Audio('/src/sounds/cleanAudio.mp3');

async function addProducts(evento) {
    evento.preventDefault();

    const newNome = document.querySelector('[data-name]').value;
    const newValor = document.querySelector('[data-valor]').value;
    const newImagem = document.querySelector('[data-imagem]').value;
    try {
        await objectApi.addItemApi(newNome, newValor, newImagem);
    } catch (error) {
        console.log(error);
    }
};
formulario.addEventListener('submit', (e) => addProducts(e));

// limpar os campos quando focar nos inputs
const inputs = document.querySelectorAll('input');
function cleanMessageSpan() {
    sendButton.classList.remove('error');
    cleanButton.classList.remove('error');
    errorMessage.innerText = '';
};
inputs.forEach(input => {
    input.addEventListener('focus', cleanMessageSpan);
    // estilizando os inputs
    input.addEventListener('focus', () => {
        input.style.outline = 'none';
    });
    input.addEventListener('blur', () => {
        input.style.outline = 'none';
    });
});

//limpar os botões quando alternar entre eles
function cleanSendButton() {
    sendButton.classList.remove('error');
};
function cleanCleanButton() {
    cleanButton.classList.remove('error');
};
sendButton.addEventListener('click', cleanCleanButton);

export function cleanForm() {
    let newNome = document.querySelector('[data-name]');
    let newValor = document.querySelector('[data-valor]');
    let newImagem = document.querySelector('[data-imagem]');
    if(newNome.value === "" && newValor.value === "" && newImagem.value === "") {
        errorAudio.play();
        cleanButton.classList.add('error');
        errorMessage.innerText = 'Os campos já estão vazios.'
    } else {
        cleanAudio.play();
        newNome.value = '';
        newValor.value = '';
        newImagem.value = '';
        cleanSendButton();
        cleanCleanButton();
        errorNameMessage.innerText = '';
        errorPrecoMessage.innerText = '';
        errorUrlMessage.innerText = '';
        inputName.style.border = '2px solid var(--first-color)';
        inputPrice.style.border = '2px solid var(--first-color)';
        inputUrl.style.border = '2px solid var(--first-color)';
    }
};
cleanButton.addEventListener('click', cleanForm);
