function serompe(){
    return 3 + z;
}

/*Esta excepción no se captura ya que al ser asincrona no se ejecuta en
el hilo principal sino que se ejecuta por el eventLoop y allí no tenemos un tipo de
trycatch.
Lo más recomendable es hacer el trycatch dentro de la function asincrona
*/
function seRompeAsincrona(){
    setTimeout(function (){
        return 3 + z;
    })
}

function seRompeAsincronaTryCatch(callback){
    setTimeout(function (){
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en mi función asíncrona');
            callback(error);
        }
        
    })
}

try {
    //serompe();
    //seRompeAsincrona();
    seRompeAsincronaTryCatch(function(error){
        console.log(error.message);
    });
} catch (error) {
    console.error('Algo se ha roto');
    console.error(error.message);
}
