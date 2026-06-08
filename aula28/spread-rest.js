const numeros = [1, 2, 3, 4, 5];
const pessoas = [
  { nome: 'Ana Silva', idade: 28, email: 'ana.silva@example.com', cidade: 'São Paulo' },
  { nome: 'Bruno Costa', idade: 35, email: 'bruno.costa@example.com', cidade: 'Rio de Janeiro' },
  { nome: 'Carla Souza', idade: 22, email: 'carla.souza@example.com', cidade: 'Belo Horizonte' },
  { nome: 'Daniel Pereira', idade: 41, email: 'daniel.pereira@example.com', cidade: 'Curitiba' },
  { nome: 'Eva Lima', idade: 30, email: 'eva.lima@example.com', cidade: 'Porto Alegre' },
];

const [
  { nome: nome1, idade: idade1, email: email1, cidade: cidade1 },
  { nome: nome2, idade: idade2, email: email2, cidade: cidade2 },
  { nome: nome3, idade: idade3, email: email3, cidade: cidade3 },
  { nome: nome4, idade: idade4, email: email4, cidade: cidade4 },
  { nome: nome5, idade: idade5, email: email5, cidade: cidade5 },
] = pessoas;


// Operador 'rest' em arrays: pega o primeiro elemento e coloca em 'a1',
// e coloca o resto dos elementos (o que sobrou) em um novo array 'a2'.
// No exemplo: a1 = 1, a2 = [2, 3, 4, 5]
const [a1, ...a2] = numeros;

// Operador 'spread' em arrays: cria um novo array copiando todos os
// elementos de 'numeros' e adiciona mais valores no final.
// Aqui criamos 'numeros2' que começa com os mesmos itens de 'numeros'
// e depois tem os números 6, 7, 8, 9, 10.
const numeros2 = [...numeros, 6, 7, 8, 9, 10];

console.log(a1);
console.log(a2);
console.log(numeros2)