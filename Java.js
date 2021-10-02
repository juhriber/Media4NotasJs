alert("Bora ver qual vai ser sua nota no final do bismestre kkkk ? :");

let Desespero1= prompt("Primeira  ");
let Desespero2= prompt("Segunda  ");
let Desespero3= prompt("Terceira ");
let Desespero4= prompt("Quarta  ");

let Resultado = (Desespero1) + (Desespero2) + (Desespero3) + (Desespero4) / 4;

if(Resultado <= 4){
    alert(`Tu se LASCOU${Resultado}, você está reprovado`);
}

if(Resultado>=4 <= 5){
    alert(`Achou que iria escapar dessa meu jovem? KKKKKK ${Resultado} Recuperação`);
}

if(Resultado >= 6){
    alert(`Parabéns, meu querido anjinho ${Resultado}, você está aprovado`);
}

alert("“Corrija em particular, mas peça desculpas em público”!");