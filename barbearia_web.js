// Resoluções aqui

const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
  };
  
  
  
  
  function buscaCortePorId(id) {
    for (let i = 0; i < barbearia.cortes.length; i++){ // percorrendo o array de 'cortes', que é uma propriedade do objeto 'barbearia'
        if (barbearia.cortes[i].id == id){ // verificando se o id do corte é igual ao id recebido por parâmetro
            return barbearia.cortes[i] // retornando o objeto 'corte' do array de cortes
        }
    }
    return 'Corte não encontrado'
  }
  
  function buscaBarbaPorId(id) {
      for (let i = 0; i < barbearia.barbas.length; i++){ // percorrendo o array de 'barbas', que é uma propriedade do objeto 'barbearia'
          if (barbearia.barbas[i].id == id){ // verificando se o id da barba é igual ao id recebido por parâmetro
              return barbearia.barbas[i] // retornando o objeto 'barba' do array de barbas
            }
        }
        return 'Barba não encontrado'
  }
  
  function verificaStatusBarbearia() {
    if (barbearia.estaAberto){ // verificando se a propriedade 'estaAberto' do objeto 'barbearia' tem valor truthy - mesma coisa que == true
        return 'Estamos abertos'
    } else {
        return 'Estamos fechados'
    }
  }

  function retornaTodosCortes() {
    return barbearia.cortes // retornando a propriedade 'cortes', que possui um array, do objeto 'barbearia'
  }

  function retornaTodasBarbas() {
    return barbearia.barbas // retornando a propriedade 'barbas', que possui um array, do objeto 'barbearia'
  }
  
  function criaPedido(nomeCliente, corteId, barbaId) {
    let retornoBarba = buscaBarbaPorId(barbaId) // armazenando o retorno da função 'buscaBarbaPorId', que está recebendo o parâmetro 'barbaId'
    let retornoCorte = buscaCortePorId(corteId) // armazenando o retorno da função 'buscaCortePorId', que está recebendo o parâmetro 'corteId'

    if (retornoBarba == 'Barba não encontrado' || retornoCorte == 'Corte não encontrado'){ // se a barba ou o corte não existirem
        return 'Não foi possível criar o pedido'
    } else {
        let pedido = {
            nome: nomeCliente, 
            pedidoCorte: retornoCorte.tipo, // acessando o objeto que retorna da função 'buscaCortePorId'
            pedidoCortePreco: retornoCorte.valor,  // acessando o objeto que retorna da função 'buscaCortePorId'
            pedidobarba: retornoBarba.tipo,  // acessando o objeto que retorna da função 'buscaBarbaPorId'
            pedidoBarbaPreco: retornoBarba.valor  // acessando o objeto que retorna da função 'buscaBarbaPorId'
        }
        return pedido
    }

  }
  
  function atualizaPedido(lista, id, valor, tipo) {
    if (!valor || !id || !tipo){ // verificando se 'valor', 'id' ou 'tipo' chegam como valores falsy (undefined, null, NaN, 0)
        return 'Entrada de valores inválida'
    }
    for (let i = 0; i < lista.length; i++){ // percorrendo a lista que chega por parâmetro
        if (lista[i].id == id){ // verificando se o id do objeto da lista é igual ao id recebido por parâmetro
            lista[i].tipo = tipo // atualizando a propriedade 'tipo' do objeto com o valor que chega por parâmetro
            lista[i].valor = valor // atualizando a propriedade 'valor' do objeto com o valor que chega por parâmetro

            return 'Item atualizado com sucesso'
        }
    }
    return 'Entrada de valores inválida'
  }

  function calculaTotal(pedido) {
    return pedido.pedidoBarbaPreco + pedido.pedidoCortePreco // acessando as propriedades 'pedidoBarbaPreco' e 'pedidoCortePreco' do objeto 'pedido' e retornando a soma
  }
