process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('el proceso acabo');
});

process.on('uncaughtException', (err, origen) => {
    console.error('Se ha olvida capturar un error');
    console.error(err);
});

funcionQueNoExiste();

console.log('Si el error se captura esto se imprime');