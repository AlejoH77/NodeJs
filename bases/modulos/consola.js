var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Y'
    }
]

console.table(tabla);

/*
console.group('Conversacion');
console.log('Hola');
console.log('Bla bla bla');
console.log('Adios');
console.groupEnd('Conversacion');
console.log('otra cosa de otra función')
*/

function funcion1(){
    console.group('funcion 1');
    console.log('esto es de la funcion 1');
    console.log('esto tambien');
    funcion2();
    console.log('hemos vuelto a la funcion 1')
    console.groupEnd('funcion 1');
}

function funcion2(){
    console.group('funcion 2');
    console.log('Ahora estamos en la función 2');
    console.groupEnd('funcion 2');
}

funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');