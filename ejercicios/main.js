
// ejercicio 1
const frutas = ['papaya', 'limon', 'pera', 'manzana', 'mandarina'];

// ejercicio 2
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
};

// ejercicio 3
frutas.forEach((fruta) => { console.log(fruta.toUpperCase()) });

// ejercicio 4
const arrayNum = [1, 2, 35, 4, 5, 6, 7, 8, 9, 10]
let cont = 0;

//ejercicio 5
while (cont < arrayNum.length) {
    console.log(arrayNum[cont]);
    cont++
};

//ejercicio 6
frutas[frutas.length] = 'naranja';
console.log(frutas);

//ejer 7

arrayNum.splice(1, 1);
console.log(arrayNum);

//ejer 8
frutas.reverse()
console.log(frutas);

//ejer 9
arrayNum.sort(function (a, b) { return b - a });
console.log(arrayNum);

//ejer 10
const buscarFruta = (array, fruta) => {
    return array.includes(fruta)
};

console.log(buscarFruta(frutas, 'peraa'));

// ejer 11
console.log(frutas[0]);

// ejer 12
console.log(arrayNum[arrayNum.length-1]);

// ejer 13
frutas.forEach((fruta) => console.log(Array(fruta)));
