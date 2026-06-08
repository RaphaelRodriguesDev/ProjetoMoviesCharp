const numeros = [1, 2, 3, 4, 5];
const letras = ["Daniel", "Carlos", "Ana Maria", "Braga"]

// const encontrado = numeros.find((numero) => numero > 3);
// const encontrado = letras.find((letra) => letra === "Ana");
// const encontrado = letras.find((letra) => letra.length > 5);
// const encontrado = letras.find((letra) => letra.includes("Br"));
const encontrado = letras.find(letra => letra.startsWith("Br"));


console.log(encontrado);
