const player = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
  comidasFavoritas: ['carne','sushi','trakinas de limao'],
};

const addInfo = (objeto,indice,valor) => {
  if (typeof objeto.indice === "undefined"){
    objeto[indice] = valor;
  }
};
addInfo(player,'email','robertoengenheiro@gmail.com');
addInfo(player,'fone','(011)9 9867-8594');
addInfo(player,'userGitHub','@robertoDev');
addInfo(player,'linkedin','linkedin/user/robertodev');

console.log(Object.keys(player));