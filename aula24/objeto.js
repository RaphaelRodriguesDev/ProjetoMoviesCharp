const pizza = {
  id: 1,
  nome: "Margherita",
  categoria: "pizza",
  descricao: "Pizza bem recheada, com opções de meio a meio, borda recheada e adicionais.",
  ativa: true,

  // Tamanhos e variações
  tamanho: {
    nome: "Grande",
    diametroCm: 35,
    fatias: 8
  },

  massa: {
    tipo: "tradicional",
    espessura: "média", // fina | média | grossa
    fermentacaoHoras: 24,
    semGluten: false
  },

  borda: {
    temBorda: true,
    tipo: "recheada",
    recheio: {
      nome: "Catupiry",
      intensidade: "extra" // leve | normal | extra
    }
  },

  // Meio a meio (sabores)
  sabores: [
    {
      nome: "Calabresa",
      ingredientes: [
        { nome: "Calabresa", quantidade: "120g" },
        { nome: "Cebola", quantidade: "50g" },
        { nome: "Orégano", quantidade: "a gosto" }
      ],
      observacoes: "Sem cebola se quiser."
    },
    {
      nome: "Frango com Catupiry",
      ingredientes: [
        { nome: "Frango desfiado", quantidade: "150g" },
        { nome: "Catupiry", quantidade: "80g" },
        { nome: "Milho", quantidade: "40g" }
      ],
      observacoes: "Pode trocar milho por bacon."
    }
  ],

  preparar() {
    return `Preparando a pizza ${this.nome} de tamanho ${this.tamanho.nome} com massa ${this.massa.tipo}.`;
  }
}

console.log("Detalhes da Pizza:", pizza.sabores[0].ingredientes);
console.log(pizza.preparar());