// Declarando um objeto:

const pessoa = 
{
  id: "ABCD1234",
  nome: "Lara Azevedo",
  idade: 40,
  dataNascimento: new Date(2000, 03, 21)
}

// Obtendo valor do objeto:
pessoa.id;
pessoa['nome'];

// Criar uma nova propriedade para o objeto: 
pessoa['nomeDaMae'] = 'Selma Maria'
console.log(pessoa)

const heroi = {
    nome: 'Batman',
    idade: 100,
    sexo: 'Masculino'
}

console.log('nome', heroi.nome);
console.log('idade', heroi['idade']);
console.log('sexo', heroi.sexo);
// Vem undefined
console.log('naoExiste', heroi.naoExiste);

// Adiciona um item no objeto
heroi.id = 0001;
console.log(heroi);

// Pegando todas as chaves do objeto
console.log(Object.keys(heroi));

// Pegando todos os valores do objeto
console.log(Object.values(heroi));

// Juntando dois objetos
const objeto1 = {
  tamanho: '10 metros'
}

const novoObjeto = Object.assign(heroi, objeto1);
console.log(novoObjeto);

// Deleta chave do objeto
delete novoObjeto.nome;
console.log(novoObjeto);