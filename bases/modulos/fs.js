//Clase que muestra el funcionamiento del fileSystem

const fs = require('fs');

function leer(ruta, callback){
    fs.readFile(ruta, (error, data) => {
        callback(data.toString());
    })
}

function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, function (error) {
        if(error){
            console.error('No he podido escribirlo', error);
        } else {
            console.log('Se ha escrito el archivo');
        }
    });
}

function borrar (ruta, callback){
    fs.unlink(ruta, callback);
}

//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
//leer(__dirname + '/archivo.txt', console.log);
borrar(__dirname + '/archivo1.txt', console.log);