const nomes = ["eduardo", "carlos", "beto", "ana",  "daniel"];

const numeros = [31, 30, 2, 1, 0, 50, 100, 200, 150, 25];

nomes.sort();
numeros.sort((a, b) => a - b);

console.log(numeros.reverse());
console.log(nomes.reverse());