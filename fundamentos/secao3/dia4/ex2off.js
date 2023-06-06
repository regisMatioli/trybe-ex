const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        sabor:'marguerita',
        amount: 1,
        price: 25,
      },
      pepperoni:{
        sabor: 'peperoni',
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    totalDoPedido: 60,
  },
};

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
 let message =`Ola, ${order.order.delivery.deliveryPerson}, entrega para :${order.name}, telefone: ${order.phoneNumber},${order.address.street},número ${order.address.number},AP ${order.address.apartment}`;

 return message;

}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  order.name='Luiz Silva';
  order.payment.totalDoPedido= '50';
 

  let message2 =`Ola, ${order.name},o valor total do seu pedido de ${order.order.pizza.marguerita.sabor} , ${order.order.pizza.pepperoni.sabor} e ${order.order.drinks.coke.type} é de R$${ order.payment.totalDoPedido},00`;

  return message2;

}

console.log(orderModifier(order));
