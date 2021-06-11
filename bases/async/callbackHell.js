function hola(nombre, miCallback){
    setTimeout(function(){
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function(){
        console.log('Bla bla bla bla');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios', nombre);
        otroCallback();
    }, 1000);
}

// ----
function conversacion(nombre, veces, callback) {
    if (veces > 0){
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    }
    else{
        callback(nombre, callback);
    }
}

console.log('Iniciando proceso...')

// hola('Alejandro', function (nombre) {
//     hablar(function() {
//         hablar(function() {
//             hablar(function() {
//                 adios(nombre, function(){
//                     console.log('Finalizando proceso...')
//                 });
//             });
//         });
//     });
// });

//REFACTORIZADO
hola('Alejandro', function(nombre) {
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});



