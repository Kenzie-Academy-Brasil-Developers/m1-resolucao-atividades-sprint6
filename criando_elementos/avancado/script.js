//Criando os elementos
const tagArticle = document.createElement("article");
const tagH1 = document.createElement("h1");
const tagParagrafo = document.createElement("p");
const tagAncora = document.createElement("a");

//Adicionando textos em cada um dos elementos criados
tagH1.innerText = "Título do Post";
tagParagrafo.innerText = "Descrição do Post";
tagAncora.innerText = "Ver post completo";

//Adicionando o h1, paragrafo e ancora dentro da tag article;
tagArticle.append(tagH1, tagParagrafo, tagAncora);

//Segunda forma de adicionar
// tagArticle.appendChild(tagH1);
// tagArticle.appendChild(tagParagrafo);
// tagArticle.appendChild(tagAncora);

//Selecionando a tag body no html
const tagBody = document.querySelector("body");

//Adicionando a tag article e seus filhos, dentro da tag body
tagBody.appendChild(tagArticle);