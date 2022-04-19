console.group("Medidas del cuadrado");

const ladoCuadrado = 5;

console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);   

const area = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${area} cm^2`);   
console.groupEnd();