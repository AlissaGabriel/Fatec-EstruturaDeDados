console.log("Legislação");

let salario = parseFloat(prompt("Qual o valor do salário: "));
let inss = 0;
let impostoRenda = 0;
let salarioLiquido = 0;

if(salario<=1320.00){
    inss = salario * 0.075;
} else if(salario>=1320.01 && salario<= 2571.29){
    inss = salario * 0.09;
}else if(salario>=2571.30 && salario<= 3856.94){
    inss = salario * 0.12;
}else if(salario>=3856.95 && salario <= 7507.49){
    inss = salario * 0.14;
}

if(salario<=1903.88){
    impostoRenda = 0;
} else if(salario>=1903.89 && salario<= 2826.65){
    impostoRenda = salario * 0.075;
}else if(salario>=2826.66 && salario<= 3751.05){
    impostoRenda = salario * 0.15;
}else if(salario>=3751.06 && salario<= 4664.68){
    impostoRenda = salario * 0.225;
}else if(salario>=4664.69){
    impostoRenda = salario * 0.275;
}   

salarioLiquido= salario - (inss + impostoRenda);
console.log("O valor do inss é de: " + inss);
console.log("O valor do imposto de renda é de: "+ impostoRenda);
console.log("Seu salário é de: " + salarioLiquido);

