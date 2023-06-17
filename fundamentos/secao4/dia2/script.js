let personagensArray = [
  'Neo',
  'Morpheus',
  'Trinity',
  'Oráculo',
  'Tank',
  'Switch',
  'Dozer',
  'Mouse',
  'Apoc',
  'Construtor',
  ];
  
  let listaPersonagens = document.querySelector('.lista-personagens');
  
  for(let i=0; i< personagensArray.length ; i+=1){
    let personagem = personagensArray[i];
  
    let criarListaPersonagem = document.createElement('li');
    criarListaPersonagem.innerText = personagem;
    criarListaPersonagem.className = 'criar-lista-personagem';
  
   listaPersonagens.appendChild(criarListaPersonagem);
  }

  let listaPersonagensMatrix = document.querySelectorAll('.criar-lista-personagem');

  for (let i=0; i<listaPersonagensMatrix.length ; i+=1){
    let personagem = listaPersonagensMatrix[i];
   if(personagem.innerText.includes('Construtor')){
    listaPersonagens.removeChild(personagem);
   }
  }