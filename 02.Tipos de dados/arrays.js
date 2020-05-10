/*

ÍNDICE | NOME
  0      Bulbassaur
  1      Pikachu
  2      Squirtle
  3      Charmander

*/

// Declaração:
[
  "Bulbassaur",
  "Pikachu",
  "Squirtle",
  "Charmander",
]

[0] === "Bulbassaur",
[1] === "Pikachu",
[2] === "Squirtle",
// Se a posição não existe, é undefined
[5] === undefined

// Declarando um array:
const minhaLista = []
const minhaListaDeTarefas = [
  'Mandar email',
  'Colocar comida para a Rita',
  'Limpar a casa'
]

// Sempre uma lista se inicia pelo índice 0.
console.log(minhaListaDeTarefas[0]);
console.log(minhaListaDeTarefas[1]);
console.log(minhaListaDeTarefas[2]);
console.log(minhaListaDeTarefas[4]); // undefined

// Quantidade de itens no array
console.log(minhaListaDeTarefas.length);

// Adicionando um item na lista
minhaListaDeTarefas.push('Tomar água');
console.log(minhaListaDeTarefas);

// Removendo último da lista e armazenando
const ultimoDaLista = minhaListaDeTarefas.pop()
console.log(ultimoDaLista, minhaListaDeTarefas);

// Removendo primeiro da lista
const primeiro = minhaListaDeTarefas.shift()
console.log(primeiro, minhaListaDeTarefas);

// Removendo um item específico de um índice
console.log(minhaListaDeTarefas[1]);
// Splice(Qual item remover, quantos remover)
minhaListaDeTarefas.splice(1,1)
console.log(minhaListaDeTarefas);

const itens = [
  1, 'computador', 0.22
]

// Verificando o tipo do array
console.log(typeof(itens));

// Verificando se é um array da forma correta
console.log(Array.isArray(itens));

// Ordenando números/textos
const numeros = [3,2,0,1]
console.log(numeros.sort());
const texto = ['b', 'z', 'a']
console.log(texto.sort());

// Juntando dois arrays
const novoArray = itens.concat([1,2,3])
console.log(novoArray);

// Juntando arrays em uma string
console.log(itens.join('-'));

// Checando índice do array
const index = itens.indexOf('computador'); // Se não achar, retorna -1 (true na tabela booleana)
console.log(index);
