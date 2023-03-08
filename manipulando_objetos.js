// Resoluções aqui

// Exercício 1 - Verificando aprovações
let listaAlunos = [
  {
    nome: "João",
    curso: "Ciencia da Computação",
    turno: "Noturno",
    mediaCorte: 7,
    materias: [
      {
        nome: "Calculo I",
        avaliacoes: [6, 8, 10, 8],
      },
      {
        nome: "Pensamento Computacional",
        avaliacoes: [6, 8, 6, 8],
      },
      {
        nome: "Linguagem Orientada a Objetos",
        avaliacoes: [7, 8, 9, 10],
      },
      {
        nome: "Arquitetura de Organização de Computadores",
        avaliacoes: [6, 8, 7, 8],
      },
    ],
  },
];

let materiasAprovadas = 0;

let listaDeMatérias = listaAlunos[0].materias;

for (let i = 0; i < listaDeMatérias.length; i++) {
  let notaTotal = 0;
  for (let j = 0; j < listaDeMatérias[i].avaliacoes.length; j++) {
    notaTotal += listaDeMatérias[i].avaliacoes[j];
  }
  if (notaTotal / listaDeMatérias[i].avaliacoes.length >= 6) {
    materiasAprovadas++;
  }
}

console.log(materiasAprovadas);

// Exercício 2 - Verificando aprovação no semestre

function calculaMedia() {
  let listaDeMatérias = listaAlunos[0].materias;

  let somaMedias = 0;

  for (let i = 0; i < listaDeMatérias.length; i++) {
    let notaTotalMateria = 0;
    for (let j = 0; j < listaDeMatérias[i].avaliacoes.length; j++) {
      notaTotalMateria += listaDeMatérias[i].avaliacoes[j];
    }
    somaMedias += notaTotalMateria / listaDeMatérias[i].avaliacoes.length;
  }

  return somaMedias / listaDeMatérias.length;
}

// Exercício 3 - Verificando destino de passageiros

const onibus = {
  capacidade: 40,
  origem: "Curitiba-PR",
  destino: "Rio de Janeiro-RJ",
  paradas: [
    "São Paulo-SP",
    "Campinas-SP",
    "São José dos Campos-SP",
    "Volta Redonda-RJ",
  ],
  passageiros: [
    {
      nome: "Luis da Silva",
      rg: "1234567890",
      bilhete: {
        origem: "Curitiba-PR",
        destino: "São José dos Campos-SP",
        poltrona: 15,
      },
    },
    {
      nome: "João da Silva",
      rg: "1234567891",
      bilhete: {
        origem: "São Paulo-SP",
        destino: "Rio de Janeiro-RJ",
        poltrona: 16,
      },
    },
  ],
};

onibus.descida = function (paradaAtual) {
  let paradaExiste = false;

  for (let i = 0; i < onibus.paradas.length; i++) {
    if (paradaAtual === onibus.paradas[i] || paradaAtual === onibus.destino) {
      paradaExiste = true;
    }
  }

  if (paradaExiste === false) {
    return `Esse onibus não realizará paradas em ${paradaAtual}!`;
  }

  let passageirosDescendo = [];
  for (let i = 0; i < onibus.passageiros.length; i++) {
    if (paradaAtual === onibus.passageiros[i].bilhete.destino) {
      passageirosDescendo.push(onibus.passageiros[i]);
    }
  }

  return passageirosDescendo;
};
