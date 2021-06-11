async function hola(nombre, miCallback){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    });
    
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Bla bla bla bla');
            resolve(nombre);
        }, 1000);
    })
        
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios', nombre);
            resolve();
        }, 1000);
    });
}

async function main(){
    let nombre = await hola('Alejandro');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

//Aqui podemos ver que la función main() se está ejecutando de manera asincrona
console.log('Empezamos el proceso...');
main();
console.log('Termina el proceso...');