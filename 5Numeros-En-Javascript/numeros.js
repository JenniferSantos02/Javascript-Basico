//- Una variable que contenga tu altura en centímetros (entero)
const altura_cm = 155;
//- Una variable que contenga tu altura en metros (número de coma flotante)
const altura_metros = 1.55;
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
const peso_kg = 53.3;
//- Una variable que contenga tu altura en metros redondeada hacia arriba
const altura_arriba = Math.ceil(altura_metros);
console.log(altura_arriba) 
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const peso_abajo = Math.floor(peso_kg);
console.log(peso_abajo) 
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const numIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(numIguales); 