const perguntas = [
  {
    pergunta: "Qual elemento é associado ao personagem Venti?",
    respostas: [
      "Pyro",
      "Geo",
      "Anemo",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o elemento principal do personagem principal do jogo?",
    respostas: [
      "Anemo",
      "Geo",
      "Electro",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o arconte de Mondstadt?",
    respostas: [
      "Venti",
      "Zhongli",
      "Raiden Shogun",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a habilidade suprema de Diluc?",
    respostas: [
      "Dawn",
      "Eclipsing Inferno",
      "Searing Onslaught",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a região de origem de Zhongli?",
    respostas: [
      "Liyue",
      "Mondstadt",
      "Inazuma",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o elemento principal de Tartaglia (Childe)?",
    respostas: [
      "Hydro",
      "Pyro",
      "Cryo",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o líder dos Fatui?",
    respostas: [
      "Signora",
      "Scaramouche",
      "Childe",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a arma preferida de Razor?",
    respostas: [
      "Claymore",
      "Polearm",
      "Sword",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a nacionalidade de Klee?",
    respostas: [
      "Mondstadt",
      "Liyue",
      "Sumeru",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome do irmão de Lumine (personagem principal)?",
    respostas: [
      "Aether",
      "Paimon",
      "Childe",
    ],
    correta: 1
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