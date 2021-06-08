//Para darle valor a esta variable de entorno se puede poner el nombre de la variable y el valor 
//antes de ejecutar el archivo, así:
// NOMBRE=Alejo node entorno.js
//PERO NO ME FUNCIONÓ EN WINDOWS, en windows hay que declarar la variable en powershell primero

let variableEntorno = process.env.NOMBRE || 'nombre predeterminado';
console.log('Hola ' + variableEntorno);

//También se puede usar un archivo para manejar estas variables, creando un archivo .env