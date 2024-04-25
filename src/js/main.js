
console.group('creacion de arrays')
const array = new Array(4);
const array2 = Array(1, 2, 3, 5, 4, 8)
const array1 = [];

console.log(array);
console.log(array1);
console.log(array2);
console.groupEnd();

console.group('Consultar datos del array');

const array3 = [1, 2, 3, 5, 8, 9, 6, 'hola', 'edwin', false, 'pepin'];

console.log(`el array tiene ${array3.length} elementos`);

// el metodo .at() solo sirve para mostrar los elementos de una lista
console.log(array3[array3.length - 1], array3.at(-1));

console.groupEnd();

console.group('actualizar elementos del array')

array3[7] = 'hello'
console.log(array3)

console.groupEnd();


console.group('agregar elementos del array')

array3.push('Alpha');
array3[12] = 'charlie';
array3.unshift('jaimito')

console.log(array3);
console.groupEnd();

console.group('eliminar elementos del array')

//el metodo .pop sustrae del array el último elemento y este se puede asignar a una variable
array3.pop(12);
console.log(array3);
delete array3[11];
console.log(array3);
//el metodo shift elimina el primer el elemento de la lista.
console.log(array3.shift());
console.log(array3);
console.groupEnd();


console.group('sumar array')

let primerosNumeros = [11, 2, 3, 4, 5, 8, 7, 9, 6, 6];

let segundosNumeros = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let numerosNuevos = primerosNumeros.concat(segundosNumeros);

console.log(numerosNuevos),

primerosNumeros.push(...segundosNumeros)

console.log(primerosNumeros),
console.groupEnd()

console.group('listar los elementos de un array')

const listaSupermercado = ['papa', 'leche', 'huevito', 'jugo', 'cafe', 'pescado']

for (let index = 0; index < listaSupermercado.length; index++) {
    console.log(listaSupermercado[index]);
};
let i = 0;
while (i<listaSupermercado.length) {
    console.log(listaSupermercado[i])
    i++
};

for (const iterator of listaSupermercado) {
    console.log(iterator)
};


listaSupermercado.forEach((item)=> console.log(item));



console.groupEnd()

