const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
const cliente = 'REGITERA CU DE BURRO';

function addCustumers(string,cliente){
  string.push(cliente);
  return string;
}
if (typeof cliente === 'string'){
console.log(addCustumers(trybeBankCustomers,cliente));
} 
else {
  console.log('O parâmetro passado deve ser do tipo string!');
}

