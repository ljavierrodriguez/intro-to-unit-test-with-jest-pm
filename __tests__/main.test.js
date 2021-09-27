const { saludo, suma } = require('../main');

test('Probando la function saludo', () => {
    //let mensaje = saludo();
    expect(saludo()).toBe("Hola como estan!");
});

test('Probando la function suma', () => {
    let resultado = suma(3, 4);
    expect(resultado).toBe(7);
});