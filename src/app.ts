// // INSTRUCCIONES: RESOLVER CADA UNO DE LOS EJERCICIOS, 
// // TIENEN QUE TENER SU TIPO DE DATO CORRECTO, ASI COMO USO DE CLEAN CODE
// //  HERRAMIENTES NECESARIAS...
// // STRINGS, METODOS DE STRINGS, NUMBER, OPERADORES LOGICOS, CONDICIONALES, OPERADORES MATEMATICOS *, /, +, -, %, 
// // METODOS MATEMATICOS, Math


// // Ejercicio 1
// // Se trata de escribir un script que diga si un número es par o es impar.
// // Recordemos que un número es par si al dividirlo por 2 da como resto 0. utilizar el operador % modulo o resto de la division
// const numero: number = 1;
// const parImpar:string = ((numero % 2) !== 0) ? "Impar": 'Par';
// console.log(parImpar)


// // Ejercicio2
// // Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo
// let positivoNegativo: number = -8;
// let message: string = (positivoNegativo >= 0) ? "Positivo" : "Negativo";  
// console.log(message)

// // Ejercicio3
// // En este ejercicio dividir dos números enteros y devolver el cociente de dividir el primero entre el segundo, 
// // pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
// let numero1 = 0;
// let numero2 = 10; //si es diferente de 0 entonces mostrara el resultado

// let resultado: number | string = (numero2 !== 0) ? numero1 / numero2 : 'Error, indeterminacion matematica';
// console.log(resultado);


// //Ejercicio4
// // Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. 
// // Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.
// let articulo:string     = 'refresco' //cambiar valor a otro que no sea vino o cerveza para probar los casos de la barra
// const direccion: string = (articulo === 'vino' || articulo ==='cerveza') ? "Dirigitete a la barra" : 'Ve a la tienda';
// console.log(direccion)


// //Ejercicio5 En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. 
// // Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, 
// // si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.

// let velocidad: number = 200 //km
// let tiempo: number = 3 //hrs
// const velocidadPortiempo: number = (velocidad / tiempo);

// let resultadoVelocidad: string  = ( velocidadPortiempo >= 40 && velocidadPortiempo <= 60 ) 
//                                         ? `Pasaste la prueba, velocidad: ${ velocidadPortiempo.toFixed(3) }km/h`
//                                         : `Conductor descalificado, velocidad: ${ velocidadPortiempo.toFixed(3) }km/h`;
// console.log(resultadoVelocidad);


let division:number = Number( (1/3).toFixed(2) );
console.log(division);



