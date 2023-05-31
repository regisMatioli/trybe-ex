let salarioB=10000, imposto, salarioL,base;

if(salarioB<=1556.94){
  base= salarioB - (salarioB*0.08);
  
  
} 
else if(salarioB>=1556.95 && salarioB<=2594.92){
  base= salarioB - (salarioB*0.09);
}
else if(salarioB>=2594.93 && salarioB<=5189.82){
  base= salarioB - (salarioB*0.11);
}
else {
  base=salarioB-570.88;
} 

if(base<=1903.98){
  imposto=0;
} 
else if(base>=1903.99 && base<=2826.65){
  imposto=(base*0.075)-142.8;
  
}
else if(base>=2826.66 && base<=3751.05){
  imposto=(base*0.15)-354.8;
}
else if(base>=3751.06 && base<=4664.68){
  imposto=(base*0.225)-636.13;
}
else {
 imposto=(base*0.275)-869.36;
} 
salarioL=base-imposto;
console.log('R$ '+ salarioL);