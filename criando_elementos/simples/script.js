//Criando uma tag p utilizando o createElement.
const tagParagrafo = document.createElement('p');

//Verificando no console a criação da tag
console.log(tagParagrafo);

//Inserindo um texto na tag P, com o innerText.
tagParagrafo.innerText = "Olá, eu sou uma tag criada pelo JS";

//Selecionando o body do html e adicionando o paragrafo através do appendChild() dentro do body
document.querySelector('body').appendChild(tagParagrafo)