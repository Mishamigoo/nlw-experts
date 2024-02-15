const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x = 5;",
        "variable x = 5;",
        "v x = 5;",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "console.log()",
        "log.console()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação estrita",
        "Concatenação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função JavaScript é usada para converter uma string em um número?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "toNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 4 + '4' em JavaScript?",
      respostas: [
        "44",
        "8",
        "Error",
      ],
      correta: 0
    },
    {
      pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo de dados da variável 'null' em JavaScript?",
      respostas: [
        "Object",
        "Null",
        "Undefined",
      ],
      correta: 0
    },
    {
      pergunta: "Como se declara uma função anônima em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "const myFunction = function() {}",
        "anonymousFunction() {}",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "splice()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'forEach()' faz em um array em JavaScript?",
      respostas: [
        "Itera sobre os elementos do array",
        "Remove todos os elementos do array",
        "Adiciona um elemento ao final do array",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //for - loop ou laço de repetição
  for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta // true
    
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
  
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }