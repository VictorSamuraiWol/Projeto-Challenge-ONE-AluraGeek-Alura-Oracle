import { objectApi } from "./conexaoApi.js";
import { deleteProduct } from "./excluirProdutos.js";
const deleteAudio = new Audio('/src/sounds/deleteAudio.mp3');

function modelProducts(imagem, nome, valor, id) {
    const divProducts = document.querySelector('#showProducts');
    const newLiProducts = document.createElement('li');
    newLiProducts.classList = 'cards';
    newLiProducts.innerHTML = `
    <img id="imgCards" src=${imagem} alt="selected image" />
    <img id="${id}" class="vectorIcon icon" src="/src/img/vector.png" alt="vector image" />
    <span>${nome}</span>
    <span>${valor}</span>
    `
    divProducts.appendChild(newLiProducts)
    
    return newLiProducts
}

function addStyleAllCards(e) {
    e.classList.add('styleCards');
};
function removeStyleAllCards(e) {
    e.classList.remove('styleCards');
};

export async function showAllCards() {
    try {
        const listaCards = await objectApi.conectionApi();
        listaCards.forEach(element => {
            modelProducts(element.imagem, element.name, element.valor, element.id)
        });
        const deleteIcons = document.querySelectorAll('.icon');
        deleteIcons.forEach((icon) => {
            icon.addEventListener('click', () => {
                deleteAudio.play();
                deleteProduct(icon.id);
            });
        });
        const cards = document.querySelectorAll('.cards');
        // cards.forEach(card => card.addEventListener('mouseover', addStyleAllCards(card)));
        cards.forEach(card => card.addEventListener('mouseover', () => {
            card.classList.add('styleCards');
        })); 
        // cards.forEach(card => card.addEventListener('mouseout', removeStyleAllCards(card)));
        cards.forEach(card => card.addEventListener('mouseout', () => {
            card.classList.remove('styleCards');
        })); 
    } catch {
        newLiProducts.innerHTML = `<h2 class="mensagem-titulo"> Não foi possível carregar a lista de videos</h2>`
    }
}
showAllCards();
