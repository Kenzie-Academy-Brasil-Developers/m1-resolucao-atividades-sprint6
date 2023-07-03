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
  classes: ["sedan"],  
  luxo: true,
  potencia: 200, 
  estacionado: true 
}


function obterPlaca(){
    return carro.placa;
}

const resultado1 = obterPlaca();
console.log(resultado1);

function verificarClasses(){
    if (carro.classes.length === 1){
        return carro.classes[0];
    } else {
        return carro.classes;
    }
}

const resultado2 =  verificarClasses();
console.log(resultado2);

function potenciaReal(){
    if (carro.luxo){
        carro.potencia = carro.potencia ** 2;
    } 
    
    return carro.potencia;
}

const resultado3 =  potenciaReal();
console.log(resultado3);

function adicionarNovaClasse(novaClasse){
    const classesPermitidas = ["sedan", "hatchback", "suv", "crossover", "cupê"];
    
    if (carro.classes.length >= 3) {
        return "Este carro não pode ter mais classes.";
    }
    
    if (classesPermitidas.includes(novaClasse.toLowerCase())) {
        if (carro.classes.includes(novaClasse)) {
            return `O carro já possui a classe ${novaClasse}.`;
        }
        carro.classes.push(novaClasse.toLowerCase());
        return `Classe ${novaClasse} adicionada com sucesso.`;
    }
    return "Classe não permitida";
}

const resultado4 = adicionarNovaClasse('cupê');
console.log(resultado4);

function naoMaisLuxo(){
    if (!carro.estacionado){
        return `O carro ${carro.placa} não está estacionado.`;
    }else if(!carro.luxo){
        return `O carro ${carro.placa} não é luxuoso.`;
    }
    return `O carro ${carro.placa} não é mais considerado um carro de luxo.`;
}

const resultado5 = naoMaisLuxo();
console.log(resultado5);
