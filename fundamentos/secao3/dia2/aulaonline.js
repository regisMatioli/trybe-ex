const nome= 'regis';
const idade =27;
const pesoInicial=225;
const pesoAtual=178;

const formulario=
  `Paciente: ${nome}
    Age: ${idade}
    Peso antes da cirurgia: ${pesoInicial}
    Peso atual: ${pesoAtual}
    Peso perdido até o momento: ${pesoInicial - pesoAtual}`;
console.log(formulario);