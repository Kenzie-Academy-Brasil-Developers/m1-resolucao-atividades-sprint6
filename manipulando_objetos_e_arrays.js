// Resoluções aqui

// Dados base para atividades

const departmentList = [
  {
    departmentName: "Financial",
    employees: [
      {
        name: "Rose",
        age: 26,
        responsibility: "Financial director",
        salary: 5600,
      },
      {
        name: "Stevem",
        age: 32,
        responsibility: "Financial manager",
        salary: 4200,
      },
      {
        name: "Beca",
        age: 26,
        responsibility: "Financial analyst",
        salary: 2800,
      },
    ],
    working: true,
  },
  {
    departmentName: "Expedition",
    employees: [
      {
        name: "Rooper",
        age: 35,
        responsibility: "Expedition director",
        salary: 5600,
      },
      {
        name: "Maggie",
        age: 22,
        responsibility: "Expedition manager",
        salary: 4200,
      },
      {
        name: "Thompson",
        age: 41,
        responsibility: "Expedition analyst",
        salary: 2800,
      },
    ],
    working: true,
  },
  {
    departmentName: "Capitation",
    employees: [
      {
        name: "Saory",
        age: 35,
        responsibility: "Capitation director",
        salary: 5600,
      },
      {
        name: "Silvia",
        age: 22,
        responsibility: "Capitation manager",
        salary: 4200,
      },
      {
        name: "Sonem",
        age: 41,
        responsibility: "Capitation analyst",
        salary: 2800,
      },
      {
        name: "Havi",
        age: 41,
        responsibility: "Trainee Capitation manager",
        salary: 1500,
      },
      {
        name: "Margie",
        age: 25,
        responsibility: "Capitation analyst",
        salary: 2800,
      },
      {
        name: "Victoria",
        age: 18,
        responsibility: "Trainee Capitation analyst",
        salary: 1500,
      },
    ],
    working: true,
  },
];

/* 
EXERCICIO 1
Desenvolva uma função chamada howManyDepartments que retorne a quantidade de departamentos na lista.
*/

function howManyDepartments() {
  /*
    obs: olhando diretamente para o array 'departmentList', 
    sabendo que todos objetos representam um departamento, 
    você simplesmente poderia retornar o comprimento do array.
    Porem aqui foi oferecido uma verificação a mais, se esse elemento(objeto), 
    tem a propriedade "departmentName".
  */

  // Variavel auxiliar criada para guardar numero de departamentos
  // lembre-se que as variaveis no escopo do loop só existem dentro dele.
  let countDepartaments = 0;

  // Percorrer o array para verificar se todos
  // elementos tem a propriedade/chave "departmentName"

  for (let i = 0; i < departmentList.length; i++) {
    // Usando loop de modo que cada repetição do laço
    // eu consiga ter a referencia de um elemento diferente
    const currentObject = departmentList[i];

    // verificando se o currentObject é um departamento.
    // lembre-se que ao acessar uma propriedade que não existe
    // é retornado undefined, que tem valor falsy. Caso contrário um
    if (currentObject.departmentName) {
      countDepartaments++;
    }

    // Alternativas melhores:
    // 1º https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/in
    // if ("departmentName" in currentObject) {
    //   countDepartaments++;
    // }

    // 2° https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    // if (currentObject.hasOwnProperty("departmentName")) {
    //   countDepartaments++;
    // }
  }

  return countDepartaments;
}

// console.log("Ex. 1:", howManyDepartments(departmentList));
// Resultado: Ex. 1: 3

/*
EXERCICIO 2
Desenvolva uma função chamada changeDepartmentName que deverá receber dois parâmetros: 
o nome atual do departamento e um novo nome para ser atribuído a ele. 
Esta função deve retornar o objeto correspondente ao departamento com o nome já atualizado. 
Se o nome do departamento não for encontrado, a função deve retornar: 
"Department not found."
*/

function changeDepartmentName(currentDepartment, newDepartmentName) {
  let updateDepartmentName = "Department not found.";

  for (let i = 0; i < departmentList.length; i++) {
    const currentObj = departmentList[i];

    if (currentObj.departmentName === currentDepartment) {
      // atribuindo novo nome ao departamento encontrado.
      currentObj.departmentName = newDepartmentName;

      // atualizando variavel auxiliar com
      updateDepartmentName = currentObj;

      // já que encontramos e atualizamos o nome departamento
      // vamos evitar percorrer desnecessáriamente o array
      // passando uma instrução para sair do loop.
      break;
    }
  }

  return updateDepartmentName;
}

console.log(changeDepartmentName("Expedition", "TI"));
// { departmentName: 'TI', employees: [...], working: true}

/*
EXERCICIO 3
  Desenvolva uma função chamada giveTheDepartmentABreak 
que alterne o valor da variável working, sempre que chamada. 
  Em resumo, se working estiver como true, deverá mudar para false, e vice-versa. 
A função deve retornar a propriedade já atualizada.
*/

function giveTheDepartmentABreak(departmentName) {
  for (let i = 0; i < departmentList.length; i++) {
    const currentObj = departmentList[i];

    if (currentObj.departmentName === departmentName) {
      // atribuindo novo status a working

      /*
      1º Alternativa
      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
      */
      // currentObj.working = currentObj.working === true ? false : true;

      /*
      2º Alternativa
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
      */
      // currentObj.working = !currentObj.working;

      /*
      3º Alternativa
      Bom e velho if else ;)
      */
      if (currentObj.working === true) {
        currentObj.working = false;
      } else {
        currentObj.working = true;
      }

      /*
      Aqui foi usado return, e não break.
      Consegue entender o motivo?
      Bom o objetivo nesse algoritimo 
      é encontrar, alterar e retornar o valor.
      Foi usado return, para sair da função.
      */
      return currentObj.working;
    }
  }
}

console.log(giveTheDepartmentABreak("Financial")); // false
console.log(giveTheDepartmentABreak("Financial")); // true

/*
EXERCICIO 4
Desenvolva uma função chamada howManyEmployeesInDepartment 
que recebe o nome do departamento como parâmetro e verifica 
quantos funcionários estão naquele departamento. 
Caso o departamento não seja encontrado, 
retornar: "Departament not found".
*/

function howManyEmployeesInDepartment(departmentName) {
  for (let i = 0; i < departmentList.length; i++) {
    const currentDepartment = departmentList[i];

    if (currentDepartment.departmentName === departmentName) {
      let numberOfEmployees = currentDepartment.employees.length;

      return numberOfEmployees;
    }
  }

  return "Departament not found";
}

console.log(howManyEmployeesInDepartment("Capitation")); // 6

/*
EXERCICIO 5

Desenvolva uma função chamada insertNewEmployeeInDepartment que 
consiga adicionarum novo funcionário ao departamento. 
A função deve receber o nome do departamento como parâmetro e um objeto pessoa com:
name: uma variável do tipo string
age: uma variável do tipo number
responsibility: uma variável do tipo string
salary: uma variável do tipo number

Passo a Passo:
Percorra a lista de departamentos.
Verifique se o nome do departamento passado existe na lista. Se não existir, retorne "Department not found".
Percorra as propriedades do departamento e encontre a propriedade employees.
Insira o novo funcionário a lista de funcionários.
Retorne o departamento atualizado.
*/

function insertNewEmployeeInDepartment(departmentName, newEmployee) {
  //Percorra a lista de departamentos.
  for (let i = 0; i < departmentList.length; i++) {
    const currentDepartment = departmentList[i];

    //Verifique se o nome do departamento passado existe na lista.
    if (currentDepartment.departmentName === departmentName) {
      // Insira o novo funcionário a lista de funcionários.
      currentDepartment.employees.push(newEmployee);

      // Retorne o departamento atualizado.
      return currentDepartment;
    }
  }

  // Se não existir, retorne "Department not found".
  return "Departament not found";
}

console.log(
  insertNewEmployeeInDepartment("Financial", {
    name: "Rosemary",
    age: 44,
    responsibility: "Financial expedition director",
    salary: 15600,
  })
);

/*
resultado EX 5
{
  departmentName: 'Financial',
  employees: [
    {
      name: 'Rose',
      age: 26,
      responsibility: 'Financial director',
      salary: 5600
    },
    {
      name: 'Stevem',
      age: 32,
      responsibility: 'Financial manager',
      salary: 4200
    },
    {
      name: 'Beca',
      age: 26,
      responsibility: 'Financial analyst',
      salary: 2800
    },
    {
      name: 'Rosemary',
      age: 44,
      responsibility: 'Financial expedition director',
      salary: 15600
    }
  ],
  working: true
}

*/
