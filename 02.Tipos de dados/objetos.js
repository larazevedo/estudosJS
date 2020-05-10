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