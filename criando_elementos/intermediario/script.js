//Criando uma tag input utilizando o createElement e armazenando em uma variável.
const tagInput = document.createElement('input');

//Com a tag input criada, adicionaremos o placeholder.
tagInput.placeholder = "Digite seu texto aqui";

//Selecionando a tag form do html
const form = document.querySelector('form');

//Inserindo no form o input criado com a tag input.
form.appendChild(tagInput);