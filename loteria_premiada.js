let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

//Exercicio 1 - Pessoa Premiada
function verificaGanhador(nome, cpf){
    let nomeLocal = nome[0].toUpperCase();
    for(let i = 1 ; i<nome.length ; i++){
        nomeLocal += nome[i].toLowerCase();
    }
    if(ganhador.nome == nomeLocal && ganhador.cpf == cpf){
        return "É ganhador!";
    }
    return "Não é ganhador!"
}
console.log(verificaGanhador('adamastor', '123.321.789-98'));


//Exercicio 2 - Quem veio atrás do prêmio?
let ganhador2 = {
    nome: 'José',
    nascimento: '22/01/1981',
    cpf: '321.456.789-98',
    estadoCivil: 'Solteiro'
}
let naoGanhadores = [];
function registraNaoGanhadores(pessoa){
    if(verificaGanhador(pessoa.nome, pessoa.cpf) == 'Não é ganhador!'){
        naoGanhadores.push(pessoa);
    }

    return `${naoGanhadores.length} vieram atrás do premio mas não eram ganhadores`;
} 
