// --------- Primeira parte ------------

// Exercício 1
const pessoa = {
  nome: '',
  anoDeNascimento: '',
  cpf: '',
  cidade: '',
  estado: '',
  logradouro: ''
}

// Exercício 2
const escola = {
  nome: '',
  cnpj: '',
  areaDeAtuacao: '',
  cidade: '',
  estado: '',
  logradouro: '',
  curso: ''
}

// Exercício 3
const curso = {
  nome: '',
  duracao: '',
  turma: '',
  modulos: ''
}

// Exercício 4
const endereco = {
  cidade: '',
  estado: '',
  logradouro: '',
  cep: ''
}

// --------- Segunda parte ------------

const carro = {  
  placa: "ABC123",   
  classes: ["Sedan"],  
  luxo: true,
  potencia: 200, 
  estacionado: true  
}

function obterPlaca(){
  return carro.placa;
}

obterPlaca();

function verificarClasses(){
  if (carro.classes.length === 1){
    return carro.classes[0];
  } else {
    return carro.classes;
  }
}

verificarClasses();

function potenciaReal(){
  if (carro.luxo){
    carro.potencia = carro.potencia ** 2;
  } 
  
  return carro.potencia;
}

potenciaReal();

function adicionarNovaClasse(novaClasse){
  const classesPermitidas = ['sedan', 'hatchback', 'suv', 'crossover', 'cupê'];

  if (carro.classes.length >= 3){
    return 'Este carro não pode ter mais classes.';
  } else {
    if (classesPermitidas.includes(novaClasse.toLowerCase())){
      if (carro.classes.includes(novaClasse.toLowerCase())){
        return `O carro já possui a classe ${novaClasse}.`;
      } else {
        carro.classes.push(novaClasse.toLowerCase());
        return `Classe ${novaClasse} adicionada com sucesso.`;
      }
    } else {
      return 'Classe não permitida';
    }
  }
}

adicionarNovaClasse('cupê');

function naoMaisLuxo(){
  if (carro.estacionado && carro.classes.includes('Luxo')){
    carro.luxo = false;
    return `O carro ${carro.placa} não é mais considerado um carro de luxo.`;
  }
}

naoMaisLuxo();
