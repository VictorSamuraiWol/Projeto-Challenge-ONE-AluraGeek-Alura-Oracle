const inputName = document.querySelector('[data-name]');
const inputPrice = document.querySelector('[data-valor]');
const inputUrl = document.querySelector('[data-imagem]');
const buttonForm = document.querySelector('#send');
const errorNameMessage = document.querySelector('.errorNameMessage');
const errorPrecoMessage = document.querySelector('.errorPrecoMessage');
const errorUrlMessage = document.querySelector('.errorUrlMessage');
const sendAudio = new Audio('/src/sounds/sendAudio.mp3');
const errorAudio = new Audio('/src/sounds/errorAudio.mp3');
const regexName = /^[A-Za-z0-9]{2}/; //inicia com minímo de 2 caracteres que podem ser letras maiúsculas ou minúsculas ou números.
const regexPrice = /^\d{1,3}(\.\d{3})*,\d{2}$/; //somente números de até 3 digitos separados por ponto e que contém uma virgula para adicionar as duas casas decimais.
const regexUrl = /^(https:\/\/|www:\/\/)[^]/; //link iniciará sempre com 'https:' ou 'www'.

valoresCorretos = {
    nome: false,
    valor: false,
    url: false
};

function validateName() {
    let name = inputName.value;
    if(regexName.test(name)) {
        console.log('ok!');
        inputName.classList.add('correct');
        inputName.classList.remove('error');
        errorNameMessage.innerText = "";
        valoresCorretos.nome = true;
    } else {
        console.log('error!');
        inputName.classList.add('error');
        inputName.classList.remove('correct');
        errorNameMessage.innerText = "Por favor, digite o mínimo de 2 letras maiúsculas e/ou minúsculas e/ou números.";
    }
};
inputName.addEventListener('change', validateName);

function validatePrice() {
    let price = inputPrice.value;
    if(regexPrice.test(price)) {
        console.log('ok!');
        inputPrice.classList.add('correct');
        inputPrice.classList.remove('error');
        errorPrecoMessage.innerText = "";
        valoresCorretos.valor = true;
    } else {
        console.log('error!');
        inputPrice.classList.add('error');
        inputPrice.classList.remove('correct');
        errorPrecoMessage.innerText = "Por favor, somente números de até 3 digitos separados por ponto e que contém uma virgula para adicionar as duas casas decimais. Ex: 100.000,00";
    }
};
inputPrice.addEventListener('change', validatePrice);

function validateUrl() {
    let url = inputUrl.value;
    if(regexUrl.test(url)) {
        console.log('ok!');
        inputUrl.classList.add('correct');
        inputUrl.classList.remove('error');
        errorUrlMessage.innerText = "";
        valoresCorretos.url = true;
    } else {
        console.log('error!');
        inputUrl.classList.add('error');
        inputUrl.classList.remove('correct');
        errorUrlMessage.innerText = "Por favor, digite um link que comece com 'https://...' ou 'www://...'.";
    }
};
inputUrl.addEventListener('change', validateUrl);

buttonForm.addEventListener("click", (event)=> {
    if(valoresCorretos.nome == false || valoresCorretos.valor == false || valoresCorretos.url == false) {
        event.preventDefault();
        errorAudio.play();
        alert('Por favor, preencha os dados do produto corretamente!');
    }
    else {
        sendAudio.play();
        alert('Formulário enviado com sucesso!');
        location.reload();

    }
});

const cardsTest = document.querySelectorAll('.cardsTest');
cardsTest.forEach((cards) => cards.addEventListener('click', () => {
    window.location.href = '../pages/alert-test.html';
}));