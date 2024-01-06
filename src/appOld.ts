


// >, <, <==, >==, !==, ==,=== - operadores logicos
//  and, or == && y || !
// los resultados de una condicion son booleanos

// let isRed: boolean = false;
// let isGreen: boolean = true;
// if(condicion =booleana){ contenido }
// if(isRed){
//     console.log('Es rojo');
// }else {
//     console.log('No es rojo');
// }

// if(isGreen){
//     console.log('Es verde');
// }


// let color: string = 'morado';

// if(color === 'red'){
//     console.log('Es rojo')
// }
// if(color === 'green'){
//     console.log('Es Verde')
// }
//    //      true          y     true     =  true
// let edad: number = 80;
// if( (edad > 18) && (edad < 60) ){
//     console.log('Eres mayor de edad:  '+ edad)
// }else if( (edad >= 61) && (edad < 80) ){
//     console.log('Eres Viejo');
// }else{
//     console.log('Eres un adolescente o ni;o')
// }

//anidacion 
// let edad: number = 90;
// if( (edad >= 18) && (edad < 60) ){
//     
// }else if( (edad >= 61) && (edad < 80) ){
//     console.log('Eres Viejo');
// }else{
//     if(edad >= 80){
//         console.log('Robas oxigeno')
//     }else{
//         console.log('Eres un adolescente o ni;o')
//     }
// }

// //condiciones ternarias
// let color: string = 'red';

// let isRed: boolean = (color === 'red') ? true : false;

// let colorClaro = (color === 'green') 
//                     ? color = 'lightgreen'
//                     : color = 'lightred';

let number1:number = 1;
let number2:number = 20;
let number3:number = 4;

//determinar cual es el numero mayor
if( number1 > number2 && number1 > number3 ){
    console.log('El numero mayor es '+ number1 );
}else {
    if(number2 > number1 && number2 > number3){
        console.log('El numero mayor es '+ number2 );
    }else{
        console.log('El numero mayor es '+ number3 );
    }
}
                
                
    
if(number1 > number2 && number1 > number3){    // 1 > 2 y 1 > 4 === false
    console.log(`El numero mayor es: ${number1}`)
}
if(number2 > number1 && number2 > number3 ){ // 2 > 1 y 2 > 4 === false
    console.log(`El numero mayor es: ${number2}`)
}
if(number3 > number1 && number3 > number2){
    console.log(`El numero mayor es: ${number3}`) // 4
}

(number1 > number2 && number1 > number3 )
    ? console.log('El numero mayor es '+ number1 )
    : (number2 > number1 && number2 > number3)
        ? console.log('El numero mayor es '+ number2 )
        : console.log('El numero mayor es '+ number3 );



