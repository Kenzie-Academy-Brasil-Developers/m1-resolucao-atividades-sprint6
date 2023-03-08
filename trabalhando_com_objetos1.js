// Resoluções aqui

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

const endereço = {
    cidade: '',
    estado: '',
    logradouro: '',
    cep: ''
}

// -----------------------------

const figure = {  
    name: "Carl",   
    classes: ["Warrior", 'Barbarious'],  
    leader_trend: true,
    power: 6, 
    allied: true  
}

function returnName(){
    return figure.name
}

returnName()

function verifyClasses(){
    if (figure.classes.length == 1){
        return figure.classes[0]
    } else {
        return figure.classes
    }
}

verifyClasses()

function realPower(){
    if (figure.leader_trend){
        figure.power **= 2
    } 
    
    return figure.power
    
}

realPower()

function insertNewClass(newClass){
    const validClasses = ['warrior', 'barbarious', 'arch', 'hunter', 'survivor']

    if (figure.classes.length >= 3){
        return 'Este personagem não pode estar em mais classes.'
    } else {
        if (validClasses.includes(newClass.toLowerCase())){
            if (figure.classes.includes(newClass.toLowerCase())){
                return `O personagem já pertence à classe ${newClass}.`
            } else {
                figure.classes.push(newClass.toLowerCase())
                return `Classe ${newClass} inserida com sucesso.`
            }
        } else {
            return 'Classe não permitida'
        }
    }
}

insertNewClass('warrior')

function noMoreBarbarious(){
    if (figure.allied && figure.classes.includes('Barbarious')){
        figure.allied = false
        return `O ${figure.name} agora é um inimigo.`
    }
}

noMoreBarbarious()