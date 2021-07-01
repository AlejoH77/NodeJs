function saludar(){
    console.log('Hola mundo!!');
}

//Se requiere exportar la función para que se pueda acceder desde otros modulos
module.exports = {
    saludar,
    prop1: 'Hola que tal'
};