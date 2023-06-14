let numeroAsteriscos = 5;
let quadrado = '';

for (let i = 0; i < numeroAsteriscos; i++) {
  
  for (let j = 0; j < numeroAsteriscos; j++) {
    quadrado += ' * ';
  }

  console.log(quadrado);
 quadrado='';
}