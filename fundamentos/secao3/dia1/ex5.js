let peca = 'rei';

switch (peca) {
  case 'peao':
 console.log('pra frente');
    break;
  case 'torre':
    console.log('horizontal');
    break;

  case 'cavalo':
    console.log('L');
    break;

  case 'bispo':
    console.log('diagonais');
    break;
  case 'rainha':
    console.log('faz tudo');
    break;
  case 'rei':
    console.log('faz nada');
    break;



  default:
    console.log('essa peça não existe');
    break;
}