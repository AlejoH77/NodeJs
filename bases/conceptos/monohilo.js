//Si se genera una excepción y no se controla se rompe el programa

console.log('Hola mundo');

let i = 0;

//Se ejecuta cada cierto tiempo
setInterval(function() {
    console.log(i)
    i++;

    /* if(i === 5){
        //la variable z no existe, por tanto va a lanzar un error
        console.log('Forzamos error');
        var a = 3 + z;
    } */

}, 1000);

console.log('Segunda instrucción');