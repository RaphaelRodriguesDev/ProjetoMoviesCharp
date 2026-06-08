// Math.PI: constante que representa o valor de π (aprox. 3.14159).
// Aqui usamos `toFixed(2)` para mostrar apenas 2 casas decimais.
console.log(Math.PI.toFixed(2));

let raio = 8;
// Math.pow(base, expoente): eleva `raio` ao quadrado (raio^2).
const area = Math.PI * Math.pow(raio, 2);

const min = 500;
const max = -500;

console.log("Área do círculo:", area.toFixed(2));

// Math.sqrt(n): retorna a raiz quadrada de n.
const raizQuadrada = Math.sqrt(16);
// Math.cbrt(n): retorna a raiz cúbica de n.
const raizCubica = Math.cbrt(16);
console.log("Raiz quadrada de 16:", raizQuadrada);

// Math.floor(valor): arredonda para baixo (menor inteiro).
let x = Math.floor(4.8);
// Math.ceil(valor): arredonda para cima (maior inteiro).
let y = Math.ceil(4.2);
// Math.round(valor): arredonda para o inteiro mais próximo.
let z = Math.round(4.5);
console.log("y:", y);
console.log("x:", x);
console.log("z:", z);

// Math.random(): gera um número pseudoaleatório no intervalo [0, 1).
// Multiplicando por 1000 e usando Math.floor obtemos inteiros entre 0 e 999,
// então somamos 1 para ficar entre 1 e 1000.
let a = Math.floor(Math.random() * 1000) + 1;
console.log(a);

// Função que usa Math.random() e Math.floor() para gerar um número inteiro
// aleatório entre `min` e `max` (ambos inclusivos):
function gerarAleatorio(min, max) {
  // (max - min + 1) determina o tamanho do intervalo; multiplicar por
  // Math.random() cria um deslocamento dentro do intervalo; Math.floor()
  // transforma em inteiro e adicionamos `min` para ajustar o ponto de partida.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(`Número aleatório entre ${min} e ${max}: ${gerarAleatorio(min, max)}`);

const numeros = [20, 309, 40, 5, 78, -2, 0];

// Math.abs(n): retorna o valor absoluto de n (sem sinal).
let abs = Math.abs(-10);
// Math.min(a, b, ...): retorna o menor entre os argumentos fornecidos.
let minValue = Math.min(5, 10, -3, 7);
// Math.max(...array): retorna o maior valor; aqui usamos spread para passar
// o array `numeros` como lista de argumentos para Math.max.
let maxValue = Math.max(...numeros);

console.log("Valor absoluto de -10:", abs);
console.log("Menor valor entre 5, 10, -3 e 7:", minValue);
console.log("Valor máximo entre os números:", maxValue);