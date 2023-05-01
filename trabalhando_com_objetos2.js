const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
]

// Exercício 1 - Quantos veículos temos no estoque ?
function contaTotal(carros){
    return carros.length;
}

console.log(contaTotal(carros));

//Exercício 2 - Quanto vale todo meu estoque de veículos?
function precoTotal(carros){
    
    let sumPrice = 0;

    for (let i = 0; i < carros.length; i++) {
        sumPrice += carros[i].preco;
    }

    return `A soma do preço de todos veículos é R$ ${sumPrice.toFixed(2)}.`
}

console.log(precoTotal(carros));

//Exercício 3 - Procurando um veículo por marca
function filtraPorMarca(carros, marca){

    let resultado = []

    for (let i = 0; i < carros.length; i++) {
        if(carros[i].marca === marca){
            resultado.push(carros[i])
        }
    }

    return resultado;
}

console.log(filtraPorMarca(carros, "VW"));

//Exercício 4 - Procurando um veículo por acessório
function filtraPorAcessorio(carros, acessorios){

    let resultado = []

    for (let i = 0; i < carros.length; i++) {
        for (let j = 0; j < carros[i].acessorios.length; j++) {
            if(carros[i].acessorios[j] === acessorios){
                resultado.push(carros[i]);
            }
        }
    }

    return resultado;
}

console.log(filtraPorAcessorio(carros, "Ar"));

//Exercício 5 - Encontrando veículos completos
function eCarroCompleto(carros){
    let resultado = []

    for (let i = 0; i < carros.length; i++) {
        if(carros[i].completo === true){
            resultado.push(carros[i])
        }
    }

    return resultado;
}

console.log(eCarroCompleto(carros));

//Exercício 6 - Adicionando mais um carro a concessionária
function adicionaCarro(carro){

    carros.push(carro);

    return carros;

}

console.log(adicionaCarro({
    modelo: "WRV",
    marca: "Honda",
    ano: "2022",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 89000.00
}));

//Exercício 7 - Removendo um carro da lista de carros da concessionária
function removeCarro(carros, indice) {
    const listaAtualizada = [];
  
    for (let i = 0; i < carros.length; i++) {
      if (i !== indice) {
        listaAtualizada.push(carros[i]);
      }
    }
  
    if (listaAtualizada.length === carros.length) {
      return "Indice inválido.";
    }
  
    return listaAtualizada;
}

console.log(removeCarro(carros, 10));

//Exercício 8 - Procurando todos carros novos
//Participando do principio que o ano atual seja 2023
function contaCarrosNovos(carros){
    let contador = 0;
  
    for (let i = 0; i < carros.length; i++) {
        const ano = carros[i].ano;
        if (ano >= 2013) {
            contador++;
        }
    }
    
    return contador;
}

console.log(contaCarrosNovos(carros));

//Exercício 9 - Quem são os donos ?
function atualizaInformacaoCarros(carros, posicao, pessoa){

    for (let i = 0; i < carros.length; i++) {
        carros[i].donos = {};
    }

    carros[posicao].donos = pessoa;

    return carros;
}

console.log(atualizaInformacaoCarros(carros, 2, {
    nome: "João",
    telefone: "91919-9191"
}))
