const { sumar, restar, multiplicar } = require('../utils');

describe('Listado de Operaciones para la calculadora', () => {
    test('Probando la operacion sumar', () => {
        expect(sumar(3, 4)).toBe(7);
    });

    test('Probando la operacion restar', () => {
        expect(restar(4, 2)).toBe(2);
    });

    test('Probando la operacion multiplicar', () => {
        expect(multiplicar(4, 4)).toBe(16);
    });
});