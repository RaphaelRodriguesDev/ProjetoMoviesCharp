/*
  Pilhas (Stack):

  - O que é uma pilha?
    Imagine uma pilha de pratos: você coloca pratos no topo e também os tira
    pelo topo. Quem entrou por último é o primeiro a sair. Isso se chama LIFO:
    Last In, First Out (último a entrar, primeiro a sair).

  - Operações comuns nesta implementação:
    - push(elemento): coloca um elemento no topo da pilha.
    - pop(): remove e retorna o elemento do topo.
    - peek(): mostra o elemento do topo sem remover.
    - isEmpty(): verifica se a pilha está vazia.
    - tamanho(): retorna quantos itens existem na pilha.
*/

class Pilha {
  constructor() {
    this.itens = [];
  }

  push(elemento) {
    this.itens.push(elemento);
  }

  // Método 'pop' remove e retorna o elemento do topo da pilha.
  pop() {
    // 'pop' do array remove o último elemento (topo) e o retorna.
    return this.itens.pop();
  }

  // Método 'peek' retorna (sem remover) o elemento que está no topo.
  peek() {
    // Acessamos o último índice do array: length - 1 é a posição do topo.
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }
}

const pilha = new Pilha();

pilha.push("A");
pilha.push("B");
pilha.push("C");

console.log(pilha.peek());
console.log(pilha.pop());
console.log(pilha.peek());
console.log(pilha.pop());
console.log(pilha.peek());
console.log(pilha.pop());
console.log(pilha.peek());
console.log(pilha.tamanho());
console.log(pilha.isEmpty());