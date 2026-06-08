// O Fill também pode ter três parametros(o número que substituirá os outros, parametro de início, até onde ele vai substituir)
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numeros.fill(20, 4, numeros.length);
numeros.fill(20, 4, 9);

console.log(numeros);