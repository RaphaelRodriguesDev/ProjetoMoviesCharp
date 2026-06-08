# CHANGELOG COMPLETO - Turma Fullstack Segunda

---

## 📚 AULA 03 - Fundamentos e Tipos de Dados

### 📄 algoritmoEscovarDentes.txt
**Conceito:** Introdução ao pensamento algorítmico
- Sequência lógica de 21 passos para escovar dentes
- Demonstra importância da ordem e detalhamento
- Comentários sobre trabalho em equipe e diferentes abordagens
- **Lição:** "Cada um programa diferente" - base para colaboração

### 🔧 tiposVariaveis.js
**Conceitos:** Tipos primitivos e complexos JavaScript
- `String`: `"Rapha"` - texto
- `Number`: `33` - numérico
- `Boolean`: `true/false` - lógico
- `Undefined`: explícito e implícito
- `Null`: ausência de objeto
- `Array`: `["Arroz", "Ovos", "Café"]` - lista
- `Object`: pessoa com propriedades
- `Function`: `criarTexto()` - bloco reutilizável
- **Ferramenta:** `typeof` para verificar tipos

### 🎯 variaveis.js
**Conceitos:** Declaração e uso básico
- Declaração com `let`
- `console.log()` para saída
- Loop `for` com 1000 iterações
- **Demonstração:** Repetição e controle de fluxo

---

## 📚 AULA 04 - Operadores e Escopo

### 🧮 desafioRetangulo.js
**Conceito:** Cálculo matemático simples
- Variáveis: `b = 2`, `h = 20`
- Constante: `A = b * h` (área = 40)
- **Resultado:** 40

### ⚡ operadoresAtribuicao.js
**Conceitos:** Operadores de atribuição
- `+=`, `-=`, `*=`, `/=` (comentados)
- Ativo: `n1 /= 1` (divisão por 1 = 30)
- **Resultado:** 30

### 🔄 varLetConst.js
**Conceitos:** Diferenças entre declarações
- `var`: redeclaração permitida, escopo global
- `let`: reatribuição permitida, escopo de bloco
- `const`: imutável para primitivos
- **Escopo:** `var` vaza do bloco, `let` respeita
- **Resultados:** n1=50, n2=25, n3=10, lista=["José","Ana","Carlos"]

---

## 📚 AULA 05 - Interação e Comparação

### 🖥️ desafioNome.html
**Conceito:** Entrada de dados do usuário
- ✅ **BUG CORRIGIDO:** `pompt` → `prompt` (linhas 2 e 3)
- Captura nome e idade
- Exibe com `document.write()`
- **Status:** Funcional

### 📐 desafioRetangulo.html
**Conceito:** Versão interativa do cálculo
- `Number(prompt())` para conversão
- Entrada dinâmica de base e altura
- Cálculo e exibição da área
- **Melhoria:** Conversão adequada de tipos

### ⚖️ operadoresComparacao.js
**Conceitos:** Operadores de comparação
- `==`, `===`, `!=`, `!==` (comentados)
- `<`, `>=`, `<=` (comentados)
- Ativo: `n1 <= n2` (30 <= 20 = false)
- **Resultado:** false

---

## 📚 AULA 06 - Strings e Lógica

### 🔗 concatenacaoString.html
**Conceitos:** Manipulação de strings
- Concatenação tradicional: `+`
- Template literals: `` `${variavel}` ``
- Expressões matemáticas em strings
- **Saída:** "Raphael Rodrigues" e "10 + 10 = 20"

### 📖 concatenacaoStrings.md
**Conceito:** Documentação técnica
- 4 métodos de concatenação:
  1. Operador `+`
  2. Método `concat()`
  3. Template literals
  4. Objeto String
- **Formato:** Markdown com exemplos práticos

### 🔄 convertendoTipos.html
**Conceitos:** Conversão de tipos
- `parseInt()`, `parseFloat()` (comentados)
- Ativo: `Number()` para conversão
- Soma de números convertidos
- **Funcionalidade:** Calculadora básica

### 🧠 operadoresLogicos.html **[ARQUIVO ATUAL]**
**Conceitos:** Lógica booleana
- AND (`&&`): ambas verdadeiras
- OR (`||`): pelo menos uma verdadeira  
- NOT (`!`): inversão lógica
- **Ativo:** Negação - false e true
- **Resultados:** false, true

---

## 📊 RESUMO TÉCNICO POR AULA

| Aula | Arquivos | Conceitos Principais | Status |
|------|----------|---------------------|--------|
| 03 | 3 | Algoritmos, Tipos, Variáveis | ✅ |
| 04 | 3 | Operadores, Escopo, Cálculos | ✅ |
| 05 | 3 | Interação, Comparação, HTML | ✅ |
| 06 | 4 | Strings, Conversão, Lógica | ✅ |

## 🎯 PROGRESSÃO PEDAGÓGICA

1. **Fundamentos** → Lógica e tipos
2. **Operações** → Cálculos e atribuições
3. **Interação** → Entrada/saída de dados
4. **Manipulação** → Strings e conversões
5. **Lógica** → Operadores booleanos

## 📝 HISTÓRICO DE ALTERAÇÕES

### 2024 - Correções e Melhorias
- **✅ Bug Crítico Corrigido:** `aula05/desafioNome.html` - `pompt` → `prompt`
- **📊 Status Atualizado:** Aula 05 agora totalmente funcional
- **✨ Melhoria Aplicada:** `aula07/else-if.html` - Adicionada validação e múltiplas condições de idade

---

*Changelog mantido por Alfred - Professor JavaScript Especialista*
*Análise detalhada de 13 arquivos em 4 aulas | Última atualização: Bug crítico corrigido*