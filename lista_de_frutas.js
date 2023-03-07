// Resoluções aqui

const listaDeFrutas = ["banana", "Morango", "Goiaba", "Pêssego"]; // declaração de uma lista para usar como exemplo

function createFruitSection() {
  const body = document.body; // capturando a tag body na ávore do DOM
  const main = document.createElement("main"); // criando uma tag main
  const imageTree = document.createElement("img"); // criando uma tag img
  const title = document.createElement("h1"); // criando uma tag h1
  const list = document.createElement("ul"); // criando uma tag ul

  imageTree.src = "./assets/img/arvore.jpg"; // definindo o caminho da imagem
  imageTree.classList.add("main_image"); // adicionando uma classe na imagem

  title.innerHTML = "<span>Vida</span>Fruta"; // inserindo um conteúdo com uma tag span no título, essa tag span serve para fazer o efeito de duas cores
  title.classList.add("main_title"); // adicionando uma classe no titulo

  list.classList.add("main_list"); // adicionando uma classe na ul

  main.append(imageTree, title, list); // inserindo a imagem, titulo e lista na tag main

  body.appendChild(main); // inserindo a tag main no body
}
createFruitSection(); // chamada da função

function insertFruitList(fruitList) {
  const ul = document.querySelector(".main_list"); // capturando a ul que possui a classe indicada

  for (let index = 0; index < fruitList.length; index++) {
    // loop responsável por percorrer a lista de frutas
    const li = document.createElement("li"); // criando uma li
    const h2 = document.createElement("h2"); // criando um titulo

    li.classList.add("fruit_list_card"); // adicionando uma classe no card da li
    h2.innerText = fruitList[index]; // inserindo o conteúdo de texto do titulo

    li.appendChild(h2); // inserindo o título na li
    ul.appendChild(li); // inserindo a li na lista ul.
  }
}

insertFruitList(listaDeFrutas); // chamando a função que gera a lista.
