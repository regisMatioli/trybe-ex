let player = {
  name: "Marta",
  sobrenome: 'Silva',
  idade: 34,
  medalhas: {
    ouro: 2,
    prata: 3
  },
  melhorDoMundo: [2006, 2007, 2008, 2009, 2010, 2018],

};

const addInfo = (objeto,indice,valor) => {
  if (typeof objeto.indice === "undefined"){
    objeto[indice] = valor;
  }
};
addInfo(player,'altura','1.90m');
console.log(player);