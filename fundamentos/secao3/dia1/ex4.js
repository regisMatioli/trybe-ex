let a1 = 60;
let a2 = 60;
let a3 = 60;
let soma;


soma = a1 + a2 + a3;
if (a1 > 0 && a2 > 0 && a3 > 0) {
  if (soma === 180) {

    console.log(true);

    return true;

  }

  else {
    console.log(false);

    return false;
  }
}
else {
  console.log('angulo invalido');
}